import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';
import Script from 'next/script';
import '/public/styles/globals.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
        offset: 100,
        duration: 1000,
        easing:'ease-in'
    });
    
},[])
  return <>
    <Head>
    <title>Visualesage</title>
      
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="title" content="Iren Akter Rone"></meta>
      <meta name="description" content="Build your dream"></meta>
      

      {/* Link  */}
    </Head>
    
    <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
  <Script src="https://kit.fontawesome.com/a54f1db03d.js" crossOrigin="anonymous" />
  <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
    <Component {...pageProps} />
  </>
}
