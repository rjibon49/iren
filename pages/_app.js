import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';
import Script from 'next/script';
import '/public/styles/globals.css'
import '/public/styles/global.minify.css'
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
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content="Elevating Digital Experiences through Innovative Design" />
      <meta name="description" content="Explore VisualSage.xyz for a captivating journey through cutting-edge web design and graphic innovations. Our portfolio showcases a harmonious blend of creativity and functionality, delivering modern, user-centric experiences that redefine digital engagement." />
      <meta name="keywords" content="VisualSage, Creative Web Design Showcase, UI/UX Innovations, Graphic Design Excellence, Digital Art Gallery, Interactive User Interfaces, Trendsetting Web Development, Modern Design Solutions, Innovative User Experience, Responsive Design Projects, visualsage0, designeriren, irenakter2, uiux, portfolio, ui porfolio, ux portfolio, desiner portfolio, graphics desiner" />
      <title>VisualSage</title>
  </Head>
    
    <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
  <Script src="https://kit.fontawesome.com/a54f1db03d.js" crossOrigin="anonymous" />
  <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
    <Component {...pageProps} />
  </>
}
