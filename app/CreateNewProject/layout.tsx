import { requireAdminUser } from "@/lib/auth/requireAdmin";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await requireAdminUser();
  console.log("User:", user);

  return (
    <div>
      {children}
    </div>
  );
}