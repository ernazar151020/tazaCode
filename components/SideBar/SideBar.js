import styled from "styled-components"
import {useState} from "react";
import {headerLinksData} from "../Header/HeaderLinksData";
import Link from "next/Link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useGlobalContext} from "../../context/Context";
import {useRouter} from "next/router";

const SideBar = () => {

	const {isOpen} = useGlobalContext()
	const {handleClick} = useGlobalContext()
	const router = useRouter()

	const handleLink = (item) => {
		handleClick()
		router.push(item.link)

	}

	return <Wrapper>
		<div className={`sidebar ${isOpen}`}>
			<ul>
				{
					headerLinksData.map((item, index) => {
						return <li key={index}>
							<span><FontAwesomeIcon icon={faChevronLeft}/></span>

							<div onClick={() => handleLink(item)} className="link">{item.title}</div>
							{/*<span className="line"></span>*/}
							<span>	<FontAwesomeIcon icon={faChevronRight}/></span>


						</li>
					})
				}

			</ul>
		</div>
	</Wrapper>
}

export default SideBar

const Wrapper = styled.div`
  .sidebar {
    position: absolute;
    right: 0;
    top: 80px;
    z-index: 999;
    padding: 10px;
    background: #000;
    color: red;
    transform: translateX(100%);
    transition: all 0.5s linear;
  }

  .is-open {
    transform: translateX(0);
    transition: all 0.5s linear;
  }

  ul {
    padding: 20px;
  }

  li {
    //margin-left: 40px;
    transition: all 0.5s ease;
    display: flex;
    margin: 10px 0;

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
      .link {
        color: #DF0606;;
        transition: all 0.3s ease;
      }
    }

    .link {
      transition: all 0.3s ease;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: #fff;
      padding: 0 5px;
      white-space: nowrap;
      cursor: pointer;
    }
  }



`