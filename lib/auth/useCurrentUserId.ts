"use client";

import { authClient } from "@/app/providers";

type SessionLike = {
  data?: {
    user?: {
      id?: string;
    };
  } | null;
  isPending?: boolean;
};

export function useCurrentUserId() {
  const session = (authClient as any).useSession?.() as SessionLike | undefined;

  return {
    userId: session?.data?.user?.id ?? null,
    isLoading: session?.isPending ?? false,
    isSignedIn: Boolean(session?.data?.user?.id),
  };
}

