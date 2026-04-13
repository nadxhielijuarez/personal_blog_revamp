import { createClient } from "@neondatabase/neon-js";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const db = createClient({
  auth: {
    url: process.env.NEON_AUTH_BASE_URL ?? requireEnv("NEXT_PUBLIC_NEON_AUTH_URL"),
    // Lets you query public/RLS-safe data before sign-in.
    allowAnonymous: true,
  },
  dataApi: {
    url: requireEnv("NEON_DATA_API_URL"),
  },
});

