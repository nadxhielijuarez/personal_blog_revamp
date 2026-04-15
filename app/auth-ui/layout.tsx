import { NeonAuthProvider } from "../providers";

export default function AuthUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NeonAuthProvider>{children}</NeonAuthProvider>;
}
