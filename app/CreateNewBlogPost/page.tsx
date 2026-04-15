import { requireAdminUser } from "@/lib/auth/requireAdmin";
import CreateNewBlogPostPageClient from "./CreateNewBlogPostPageClient";

export default async function CreateNewBlogPostPage() {
  const user = await requireAdminUser();
  return <CreateNewBlogPostPageClient userId={user.id ?? ""} />;
}
