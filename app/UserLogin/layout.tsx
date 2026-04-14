import { NeonAuthProvider } from "../providers";

export default function UserLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NeonAuthProvider>
      {children}
    </NeonAuthProvider>
  );
}
