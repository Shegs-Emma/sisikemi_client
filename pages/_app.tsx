import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "../store/store";
import NextNProgress from "nextjs-progressbar";
import { UserProvider } from "../contexts/user-context";
import { ReactElement, ReactNode, Suspense } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <UserProvider initialUser={pageProps?.user}>
      <Suspense fallback={<p>loading</p>}>
        {/* <Provider store={store}> */}
        <NextNProgress
          color="#EA622B"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        {/* <Component {...pageProps} /> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </Provider> */}
      </Suspense>
    </UserProvider>
  );
}

export default MyApp;
