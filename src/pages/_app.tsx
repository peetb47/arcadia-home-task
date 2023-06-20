import { SessionProvider } from "next-auth/react";
import "../globals.css";

interface AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
