import { auth } from "@/lib/auth/server";
import { NextResponse } from "next/server";

/**
 * Returns the current Neon auth session (server-side, from cookies).
 * In development, also logs to the terminal running `next dev`.
 */
export async function GET() {
  const { data, error } = await auth.getSession();

  if (process.env.NODE_ENV === "development") {
    //console.log("[api/auth/me] getSession:", { data, error });
  }

  return NextResponse.json({
    ok: !error,
    session: data ?? null,
    error: error
      ? { message: (error as { message?: string }).message ?? String(error) }
      : null,
  });
}
