import "../../globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import Head from "next/head";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Arcadia test task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col p-4 text-xl bg-gray-900 text-gray-300">
        <header className="text-center p-4 text-gray-400">
          Arcadia test task by Peter Bodnar
        </header>
        <main className="flex flex-1 rounded-xl bg-gray-800 items-center justify-center">
          {children}
        </main>
        <footer className="text-center p-4 text-gray-400">- 2023 -</footer>
      </div>
    </SessionProvider>
  );
}