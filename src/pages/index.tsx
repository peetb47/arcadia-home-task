import { Layout } from "@/components/Layout";
import { useSession } from "next-auth/react";
import { SignInButton } from "@/components/SignInButton";
import { Menu } from "@/components/Menu";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      {session && (
        <div className="text-center">
          Welcome <b>{session.user?.name}</b>!
          <Menu />
        </div>
      )}
      {!session && <SignInButton />}
    </Layout>
  );
}
