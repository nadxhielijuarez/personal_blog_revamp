import { NeonAuthProvider } from "../providers";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NeonAuthProvider>{children}</NeonAuthProvider>;
}

