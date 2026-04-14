"use client";

import { createAuthClient } from "@neondatabase/neon-js/auth";
import { BetterAuthReactAdapter } from "@neondatabase/neon-js/auth/react/adapters";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react/ui";

const authClient = createAuthClient(
  process.env.NEXT_PUBLIC_NEON_AUTH_URL!,
  { adapter: BetterAuthReactAdapter() }
);

export { authClient };

export function NeonAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NeonAuthUIProvider authClient={authClient}>{children}</NeonAuthUIProvider>
  );
}