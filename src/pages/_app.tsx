import { useRouter } from "next/router";
import { Layout } from "@/components/layout/layout";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pagesWithoutLayout = ["/404", "/login"];

  return (
    <>
      {pagesWithoutLayout.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
