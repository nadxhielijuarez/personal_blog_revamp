"use client";

import { createAuthClient } from "@neondatabase/neon-js/auth";
import {
  BetterAuthReactAdapter,
  NeonAuthUIProvider,
} from "@neondatabase/neon-js/auth/react";

const authClient = createAuthClient(
  process.env.NEXT_PUBLIC_NEON_AUTH_URL!,
  { adapter: BetterAuthReactAdapter() }
);

export function NeonAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NeonAuthUIProvider authClient={authClient}>{children}</NeonAuthUIProvider>
  );
}