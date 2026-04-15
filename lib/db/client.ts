import { neon } from "@neondatabase/serverless";

export type BaseEntity = {
  id?: number;
};


function getPostgresConnectionString(): string {
  const url =
    process.env.NEON_POSTGRES_URL?.trim() ||
    process.env.NEON_POSTGRES_API_URL?.trim();
  if (!url) {
    throw new Error(
      "Missing database connection string. Set one of: NEON_POSTGRES_URL, DATABASE_URL, or NEON_POSTGRES_API_URL in .env.local (Neon dashboard → Connection string)."
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

/**
 * Inserts a row using bound parameters. Table and column names are validated
 * (not passed as `$n` placeholders) because Postgres does not parameterize identifiers.
 */
export async function insertEntity<T extends BaseEntity>(table: string, entity: T): Promise<T> {
  try {
    assertSafeSqlIdentifier(table, "table name");
    const entries = Object.entries(entity as Record<string, unknown>).filter(
      ([, value]) => value !== undefined
    );
    if (entries.length === 0) {
      throw new Error(`No columns to insert for table ${table}`);
    }
    for (const [key] of entries) {
      assertSafeSqlIdentifier(key, "column name");
    }
    const columns = entries.map(([key]) => key);
    const values = entries.map(([, value]) => value);
    const columnList = columns.join(", ");
    const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");
    const text = `INSERT INTO ${table} (${columnList}) VALUES (${placeholders}) RETURNING *`;
    const rows = await db.query(text, values);
    const [result] = rows ?? [];
    if (!result) {
      throw new Error(`Failed to insert entity into ${table}`);
    }
    return result as T;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to insert entity into ${table}: ${error}`);
  }
}
