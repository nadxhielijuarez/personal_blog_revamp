import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Next.js 16+ uses `proxy.ts` instead of `middleware.ts`.
 * Pass-through: no global auth redirect (admin routes use `requireAdminUser` in layouts).
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
