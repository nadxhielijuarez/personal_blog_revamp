import { createNeonAuth } from "@neondatabase/neon-js/auth/next/server";

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL || requireEnv("NEXT_PUBLIC_NEON_AUTH_URL"),
  cookies: {
    secret: requireEnv("NEON_AUTH_COOKIE_SECRET"),
  },
});

