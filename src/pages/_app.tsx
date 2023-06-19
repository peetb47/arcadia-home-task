import { SessionProvider } from "next-auth/react";

interface AppInterface {
  Component: any;
  pageProps: any;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppInterface) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
