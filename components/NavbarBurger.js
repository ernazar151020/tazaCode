import styled from "styled-components"
import {useState} from "react";
import {useGlobalContext} from "../context/Context";

const NavbarBurger = () => {

	const {handleClick, isOpen} = useGlobalContext()

	return <Wrapper>
		<a href="#none" className={`navBtn5 ${isOpen}`} onClick={handleClick}>
			<span className="bar"></span>
			<span className="bar"></span>
			<span className="bar"></span>
			<span className="bar"></span>
		</a>
	</Wrapper>
}

export default NavbarBurger

const Wrapper = styled.div`
  .navBtn5 {
    position: relative;
    display: block;
    width: 32px;
    height: 32px;
    margin: auto;
    text-align: center;
  }

  .navBtn5 .bar {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: 2px;
    background: red;
    transition: transform .3s ease-out .1s;
    -webkit-transition: transform .3s ease-out .1s;
    -moz-transition: transform .3s ease-out .1s;
  }

  .navBtn5 .bar:nth-child(1) {
    top: 5px;
    transform-origin: left;
    -webkit-transform-origin: left;
    -moz-transform-origin: left;
  }

  .navBtn5 .bar:nth-child(2) {
    top: 15px;
  }

  .navBtn5 .bar:nth-child(3) {
    top: 15px;
  }

  .navBtn5 .bar:nth-child(4) {
    top: 25px;
    transform-origin: right;
    -webkit-transform-origin: right;
    -moz-transform-origin: right;
  }

  .navBtn5.is-open .bar:nth-child(1) {
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
  }

  .navBtn5.is-open .bar:nth-child(2) {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
  }

  .navBtn5.is-open .bar:nth-child(3) {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
  }

  .navBtn5.is-open .bar:nth-child(4) {
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
  }

`