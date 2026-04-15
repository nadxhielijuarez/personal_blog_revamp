import { redirect } from "next/navigation";
import { auth } from "./server";

type SessionUser = {
  id?: string;
  email?: string;
  role?: string;
};

function resolveUserId(user: SessionUser & Record<string, unknown>): string | undefined {
  const rawID = user.id ?? user.userId;
  if (rawID === undefined || rawID === null){
    return 'emptyID';
  }
  const s = String(rawID).trim();
  return s.length > 0 ? s : undefined;
}

export async function requireAdminUser() {
  const { data: session, error } = await auth.getSession();
  if (error || !session?.user) {
    redirect("/OopsNotAdmin");
  }

  const user = session.user as SessionUser & Record<string, unknown>;
  const isAdmin = user.role === "admin" || user.role === "owner";

  if (!isAdmin) {
    redirect("/OopsNotAdmin");
  }

  const id = resolveUserId(user);
  return { ...user, id } as SessionUser;
}

