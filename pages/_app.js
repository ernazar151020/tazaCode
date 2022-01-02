import "../styles/globals.css";
import Context from "../context/Context";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import LoadingScreen from "../components/PreLoader/index";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  });

  return (
    <>
      {loading ? (
        <Context>
          <Head>
            <title>TazaCode</title>
            <meta
              name="viewport"
              keywords="tazacode , it company , bishkek , Бишкек , IT компания б Смартпост ,Smartpost , uygo , ime , medbase  , веб разработка , web development , web , android , ios "
              content="initial-scale=1.0, width=device-width"
            />
            <meta property={"og:title"} content={"tazacode"} />
          </Head>
          <NextNProgress
            height={6}
            color="red"
            options={{ easing: "ease", speed: 500 }}
          />
          <Component {...pageProps} />
        </Context>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
