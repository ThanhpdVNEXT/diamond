import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {  useEffect, useState } from 'react';
import liff from '@line/liff';


export default function App({ Component, pageProps }: AppProps) {
  const [liffObject, setLiffObject] = useState<any>(null);
  const [liffError, setLiffError] = useState<any>(null);

    // Execute liff.init() when the app is initialized
    useEffect(() => {
      // to avoid `window is not defined` error
  
        liff.init({ liffId: process.env.LIFF_ID || '' })
          .then(() => {
            console.log("liff.init() done");
            setLiffObject(liff);
          })
          .catch((error: { toString: () => any; }) => {
            console.log(`liff.init() failed: ${error}`);
            if (!process.env.liffId) {
              console.info(
                "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
              );
            }
            setLiffError(error.toString());
          });
    }, []);

   // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;

  return <Component {...pageProps} />
}
