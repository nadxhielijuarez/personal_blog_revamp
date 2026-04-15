import { requireAdminUser } from "@/lib/auth/requireAdmin";
import CreateNewProjectPageClient from "./CreateNewProjectPageClient";

export default async function CreateNewProjectPage() {
  const user = await requireAdminUser();
  return <CreateNewProjectPageClient userId={user.id ?? ""} />;
}
