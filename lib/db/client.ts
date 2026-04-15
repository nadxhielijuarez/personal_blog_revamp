import { neon } from "@neondatabase/serverless";

export type BaseEntity = {
  id?: number;
};

/**
 * Accepts common env names for the same Neon Postgres connection string.
 * - `DATABASE_URL` — typical on Vercel / many templates
 * - `NEON_POSTGRES_URL` — explicit Neon naming
 * - `NEON_POSTGRES_API_URL` — sometimes used in Neon docs / older env naming
 */
function getPostgresConnectionString(): string {
  const url =
    process.env.NEON_POSTGRES_URL?.trim() ||
    process.env.DATABASE_URL?.trim() ||
    process.env.NEON_POSTGRES_API_URL?.trim();
  if (!url) {
    throw new Error(
      "Missing database connection string. Set one of: NEON_POSTGRES_URL, DATABASE_URL, or NEON_POSTGRES_API_URL in .env.local (Neon dashboard → Connection string)."
    );
  }
  return url;
}

/**
 * Direct SQL over WebSocket / HTTP to Neon (used by `insertEntity`).
 */
export const db = neon(getPostgresConnectionString());

export async function insertEntity<T extends BaseEntity>(table: string, entity: T): Promise<T> {
  try {
    const [result] = await db`INSERT INTO ${table} ${entity} RETURNING *`;
    if (!result) {
      throw new Error(`Failed to insert entity into ${table}`);
    }
    return result as T;
  } catch (error) {
    throw new Error(`Failed to insert entity into ${table}: ${error}`);
  }
}
