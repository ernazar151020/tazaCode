import '../styles/globals.css'
import Context from "../context/Context";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

function MyApp({Component, pageProps}) {
	return <Context>
		<Head>
			<title>TazaCode</title>
			<meta name="viewport"
			      keywords="tazacode , it company , bishkek , Бишкек , IT компания б Смартпост ,Smartpost , uygo , ime , medbase  , веб разработка , web development , web , android , ios "
			      content="initial-scale=1.0, width=device-width"/>
			<meta property={"og:title"} content={"tazacode"}/>
			{/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>*/}
			{/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
			{/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
			{/*<link rel="manifest" href="/site.webmanifest"/>*/}
			{/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>*/}
			{/*<meta property={"og:title"} name="msapplication-TileColor" content={"#da532c"}/>*/}
			{/*<meta property={"og:title"} name="theme-color" content={"#ffffff"}/>*/}

		</Head>
		<NextNProgress height={6} color="red"   options={{ easing: 'ease', speed: 500 }}/>
		<Component {...pageProps} />
	</Context>
}

export default MyApp
