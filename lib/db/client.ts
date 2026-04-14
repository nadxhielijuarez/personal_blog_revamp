"user server";

import { createClient } from "@neondatabase/neon-js";
import { neon } from "@neondatabase/serverless";

export type BaseEntity = {
  id?: number;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const sqlClient = createClient({
  auth: {
    url: process.env.NEON_AUTH_BASE_URL ?? requireEnv("NEON_POSTGRES_API_URL"),
    // Lets you query public/RLS-safe data before sign-in.
    allowAnonymous: true,
  },
  dataApi: {
    url: requireEnv("NEON_DATA_API_URL"),
  },
});

export const db = neon(process.env.NEON_POSTGRES_URL ?? requireEnv("NEON_POSTGRES_URL"));


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
