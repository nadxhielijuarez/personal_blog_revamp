import { NeonAuthProvider } from "../providers";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NeonAuthProvider>{children}</NeonAuthProvider>;
}

