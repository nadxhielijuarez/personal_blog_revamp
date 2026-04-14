"use client";

import { useEffect } from "react";

/**
 * Dev helper: logs current session JSON from `/api/auth/me` in the browser console.
 * Remove from pages before production if you do not want this behavior.
 */
export function AuthSessionDebug() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    void (async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const body = await res.json();
        console.log("[AuthSessionDebug] /api/auth/me:", body);
      } catch (e) {
        console.error("[AuthSessionDebug] fetch failed:", e);
      }
    })();
  }, []);

  return null;
}
