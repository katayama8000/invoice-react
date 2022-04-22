import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Invoice</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
