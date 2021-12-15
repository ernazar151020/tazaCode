import styled from "styled-components"
import HeaderNavbar from "../Header/HeaderNavbar";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import Modal from "../CustomModal/CustomModal";
import Head from 'next/head'

const Layout = ({children}) => {
	return <>
		<Head>
			<title>TazaCode</title>
			<meta name="viewport" keywords="tazacode , it company , bishkek , Бишкек , IT компания б Смартпост ,Smartpost , uygo , ime , medbase  , веб разработка , web development , web , android , ios " content="initial-scale=1.0, width=device-width" />
			<meta property={"og:title"} content={"tazacode"}/>
		</Head>
		<Wrapper>
			<Modal/>
			<SideBar/>
			<HeaderNavbar/>
			{children}
			<Footer/>
		</Wrapper>

	</>
}

export default Layout

const Wrapper = styled.div`
	position: relative;

`