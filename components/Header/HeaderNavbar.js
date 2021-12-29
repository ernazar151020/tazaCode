import styled from "styled-components"
import Logo from "../../assets/logo.svg"
import Background from "../../assets/header-background.png"
import SearchInput from "./SearchInput";
import Image from "next/image"
import Link from "next/link"
import {headerLinksData} from "./HeaderLinksData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight, faWindowMinimize, faBars} from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import NavbarBurger from "../NavbarBurger";



const HeaderNavbar = () => {
	const [hideHeaderBg, sethHideHeaderBg] = useState(true)

	const query = useRouter()
	const router = useRouter()

	useEffect(() => {
		if (query.pathname === "/") {
			sethHideHeaderBg(false)
		}
	}, [])


	const handlePush = () => {
		router.push("/")
	}

	return <Wrapper>
		<HeaderContent>
			<HeaderTop>
				<div className="container">
					<div className="header_top_content">
						<LogoWrapper>
							<Image src={Logo} alt="" onClick={handlePush}/>
						</LogoWrapper>
						{/*<SearchInput/>*/}
						<div className="burger">
							<NavbarBurger/>
						</div>
					</div>

				</div>

			</HeaderTop>
			<HeaderLinks>
				{
					hideHeaderBg && <div className="background">
						<Image src={Background} alt="" layout={"fill"} objectFit={"cover"}/>
					</div>
				}

				<div className="container">
					<div className="links_content">
						<ul>
							{
								headerLinksData.map((item, index) => {
									return <SingleHeaderLink key={index} item={item}/>
								})
							}

						</ul>
					</div>

				</div>

			</HeaderLinks>

		</HeaderContent>
	</Wrapper>
}

export default HeaderNavbar


const SingleHeaderLink = ({item}) => {
	const [showCode, setShowCode] = useState(false)

	const handleMouseOver = (index) => {
		setShowCode(true)
	}

	const handleMouseOut = () => {
		setShowCode(false)
	}

	return <li onMouseOver={handleMouseOver}
	           onMouseOut={handleMouseOut}>
		<span className={!showCode && "hidden"}>{"<"}</span>

		<Link href={item.link}>{item.title}</Link>
		{/*<span className="line"></span>*/}
		<span className={!showCode && "hidden"}>	{"/>"}</span>


	</li>
}

const Wrapper = styled.header`
  position: relative;
`

const HeaderContent = styled.div``
const HeaderTop = styled.div`
  background: #000;

  .header_top_content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .burger {
    display: none;
    color: #DF0606;
    font-size: 30px;
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
    }
  }
`

const HeaderLinks = styled.div`
  position: relative;
  height: 120px;

  @media (max-width: 768px) {
    display: none;
  }

  .background {
    position: absolute;
    inset: 0;
    height: 100%;
    background: #000;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }

  .links_content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ul {

    position: relative;
    z-index: 50;
    display: flex;
    align-items: center;
    height: 125px;

    li {
      margin-left: 40px;
      margin: 10px 0;
      transition: all 0.5s ease;
      display: flex;

      span {
        color: #DF0606;
        white-space: nowrap;
        transition: all 0.3s ease;
      }

      .hidden {
        transition: all 0.3s ease;
        visibility: hidden;
      }

      .line {
        //height: 20px;
        //width: 2px;
        background: #DF0606;

      }

      :hover {
        a {
          color: #DF0606;;
          transition: all 0.3s ease;
        }
      }

      a {
        transition: all 0.3s ease;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: #fff;
        padding: 0 5px;
        white-space: nowrap;
      }
    }
  }
`
const LogoWrapper = styled.div`
  cursor: pointer;
  //height: 18px;
  //  width: 100px;
  // img{
  //   height: 18px;
  // }
`
