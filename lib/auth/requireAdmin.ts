import { redirect } from "next/navigation";
import { auth } from "./server";

type SessionUser = {
  id?: string;
  email?: string;
  role?: string;
};

export async function requireAdminUser() {
  const { data: session, error } = await auth.getSession();
  if (error || !session?.user) {
    redirect("/OopsNotAdmin");
  }

  const user = session.user as SessionUser;
  const isAdmin = user.role === "admin" || user.role === "owner";

  if (!isAdmin) {
    redirect("/OopsNotAdmin");
  }

  return user;
}

