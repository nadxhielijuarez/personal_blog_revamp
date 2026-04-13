import { createUser, listUsers } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await listUsers();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("GET /api/users failed:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; fullName?: string };

    if (!body.email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    const user = await createUser({
      email: body.email,
      fullName: body.fullName ?? null,
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("POST /api/users failed:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

