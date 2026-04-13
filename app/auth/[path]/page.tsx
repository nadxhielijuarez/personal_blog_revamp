import { AuthView } from "@neondatabase/neon-js/auth/react";

type Props = {
  params: Promise<{ path: string }>;
};

export default async function AuthPage({ params }: Props) {
  const { path } = await params;
  return (
    <div>
      <div>
        <AuthView path={path} />
      </div>
    </div>
  );
}
