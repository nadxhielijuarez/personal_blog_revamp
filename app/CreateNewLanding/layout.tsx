import { requireAdminUser } from "@/lib/auth/requireAdmin";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: React.ReactNode }) {
  await requireAdminUser();
  return (
    <div>
      {children}
    </div>
  );
}