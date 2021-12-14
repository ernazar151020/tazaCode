import styled from "styled-components"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import Modal from "../CustomModal/CustomModal";

const Layout = ({children}) => {
	return <>
		<Wrapper>
			<Modal/>
			<SideBar/>
			<Header/>
			{children}
			<Footer/>
		</Wrapper>

	</>
}

export default Layout

const Wrapper = styled.div`
	position: relative;

`