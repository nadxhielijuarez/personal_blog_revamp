import { AuthView } from "@neondatabase/neon-js/auth/react";
import { authViewPaths } from "@neondatabase/neon-js/auth/react/ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

type Props = {
  params: Promise<{ path: string }>;
};

export default async function AuthUIPage({ params }: Props) {
  const { path } = await params;
  return <AuthView path={path} />;
}
