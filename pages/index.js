import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout/Layout";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import News from "../components/News/News";
import MainPage from "../components/MainPage/MainPage";
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import ScrollPagination from "../components/ScrollPagination/ScrollPagination";
import Team from "../components/Team/Team";
import SideBar from "../components/SideBar/SideBar";
import Context from "../context/Context";

export default function Home() {
	return (
			<Layout>

				<ScrollPagination/>
				<MainPage/>
				<Services/>
				{/*<Projects/>*/}
				<AboutUs/>
				<News/>
				<Team/>
			</Layout>

	)
}
