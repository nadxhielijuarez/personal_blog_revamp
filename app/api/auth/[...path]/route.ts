import { auth } from "@/lib/auth/server";

/**
 * Proxies Neon Auth traffic through your app so session cookies are set on
 * this origin (localhost / your domain). Required for server-side
 * `auth.getSession()` to return a user.
 */
export const { GET, POST, PUT, PATCH, DELETE } = auth.handler();
