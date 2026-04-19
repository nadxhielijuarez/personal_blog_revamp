import "server-only";
import { neon } from "@neondatabase/serverless";

export type BaseEntity = {
  id?: number;
};


export function getPostgresConnectionString(): string {
  const url =
    process.env.NEON_POSTGRES_URL?.trim() ||
    process.env.NEON_POSTGRES_API_URL?.trim();
  if (!url) {
    throw new Error(
      "Missing database connection string. Set one of: NEON_POSTGRES_URL or NEON_POSTGRES_API_URL in .env.local (Neon dashboard → Connection string)."
    );
  }
  return url;
}

/** Postgres identifier: letters, digits, underscore; must not start with a digit. */
const SQL_IDENTIFIER_RE = /^[a-z_][a-z0-9_]*$/i;

function assertSafeSqlIdentifier(name: string, label: string): void {
  if (!SQL_IDENTIFIER_RE.test(name)) {
    throw new Error(`Invalid ${label}: ${name}`);
  }
}

/**
 * Direct SQL over HTTP to Neon (used by `insertEntity`).
 */
export const db = neon(getPostgresConnectionString());