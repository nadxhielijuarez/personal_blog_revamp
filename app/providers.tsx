"use client";

import { createAuthClient } from "@neondatabase/neon-js/auth";
import { BetterAuthReactAdapter } from "@neondatabase/neon-js/auth/react/adapters";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react/ui";

/**
 * Browser auth must hit **this app's** `/api/auth/*` proxy (see
 * `app/api/auth/[...path]/route.ts`). That flow sets cookies on your origin.
 * Pointing createAuthClient at the raw Neon URL only sets session on Neon's
 * host, so `auth.getSession()` on the server always sees null.
 */
const appOrigin = (
  process.env.NEXT_PUBLIC_APP_ORIGIN ?? "http://localhost:3000"
).replace(/\/$/, "");

const authClient = createAuthClient(`${appOrigin}/api/auth`, {
  adapter: BetterAuthReactAdapter(),
});

export { authClient };

/** Must match the `app/auth-ui` segment so `RedirectToSignIn` and links hit real pages. */
const AUTH_UI_BASE_PATH = "/auth-ui";

export function NeonAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NeonAuthUIProvider authClient={authClient} basePath={AUTH_UI_BASE_PATH}>
      {children}
    </NeonAuthUIProvider>
  );
}