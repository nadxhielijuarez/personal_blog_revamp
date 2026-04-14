import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Minimal, safe query: verifies connectivity + schema visibility.
    const { error } = await db.from("app_users").select("id").limit(1);
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("GET /api/db/health failed:", error);
    return NextResponse.json(
      { ok: false, error: "Database connection failed (see server logs)" },
      { status: 500 }
    );
  }
}

