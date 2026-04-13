import { AccountView } from "@neondatabase/neon-js/auth/react";
import { accountViewPaths } from "@neondatabase/neon-js/auth/react/ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(accountViewPaths).map((path) => ({ path }));
}

type Props = {
  params: Promise<{ path: string }>;
};

export default async function AccountPage({ params }: Props) {
  const { path } = await params;
  return <>
  <AccountView path={path} /> 
    </>;
}
