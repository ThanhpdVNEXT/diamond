import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import type { Liff } from "@line/liff";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { config } from "@/config/application.properties";

export default function App({ Component, pageProps }: AppProps) {

  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);
  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: config.liffId, withLoginOnExternalBrowser: true })
          .then(() => {
            console.log("LIFF init succeeded.=>", liff);
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;

  return (
    <>
      <Header title={"a"} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
