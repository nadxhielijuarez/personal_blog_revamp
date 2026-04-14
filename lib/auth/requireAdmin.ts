import { redirect } from "next/navigation";
import { auth } from "./server";

type SessionUser = {
  id?: string;
  email?: string;
  role?: string;
};

export async function requireAdminUser() {
  const { data: session, error } = await auth.getSession();
  console.log(session);
  console.log(error);
  if (error || !session?.user) {
    // redirect("/OopsNotAdmin");
    console.log(session);
    console.log("No session found");
  }

  const user = session.user as SessionUser;
  const isAdmin = user.role === "admin" || user.role === "owner";

  if (!isAdmin) {
    console.log(user);
    console.log("User is not an admin");
    // redirect("/OopsNotAdmin");
  }

  return user;
}

