import { requireAdminUser } from "@/lib/auth/requireAdmin";
import { ourFileRouter } from "@/app/api/upload_thing/core";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await requireAdminUser();
  return (
    <div>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      {children}
    </div>
  );
}