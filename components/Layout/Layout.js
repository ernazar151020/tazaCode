import styled from "styled-components"
import HeaderNavbar from "../Header/HeaderNavbar";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import Modal from "../CustomModal/CustomModal";
import Head from 'next/head'

const Layout = ({children}) => {
	return <>

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