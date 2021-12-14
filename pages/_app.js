import '../styles/globals.css'
import Context from "../context/Context";
import NextNProgress from "nextjs-progressbar";

function MyApp({Component, pageProps}) {
	return <Context>
		<NextNProgress height={6} color="red"   options={{ easing: 'ease', speed: 500 }}/>
		<Component {...pageProps} />
	</Context>
}

export default MyApp
