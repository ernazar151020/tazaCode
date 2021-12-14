import styled from "styled-components"
import Image from "next/image";
import Bg from "../../assets/about-us-bg.svg";
import Link from "next/link"
const AboutUs = () => {
	return <Wrapper id={"about-us"} name={"about-us"}>
		<div className="container">
			<div className="background_img">
				<Image src={Bg} layout={"fill"} objectFit={"contain"}/>
			</div>
			<div className="about_header">
				<h1 className="title">about us</h1>
			</div>
			<AboutUsContent>
				<div className="text_wrap">
					<div className="text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
						venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
						elementum facilisis leo, vel
					</div>
					<div className="text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
						venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
						elementum facilisis leo, vel
					</div>
				</div>

				<div className="button">
					<Link href={"/about-us"}>
						<button>read more</button>
					</Link>

				</div>
			</AboutUsContent>
		</div>
	</Wrapper>
}

export default AboutUs

const Wrapper = styled.div`
  padding: 32px 0 109px;
  background: #000;
  position: relative;
  z-index: 20;

  .background_img {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .about_header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    position: relative;
    z-index: 20;
    text-transform: uppercase;
    margin-bottom: 55px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 500px) {
      font-size: 26px;
    }

    :before {
      content: "about us";
      position: absolute;
      font-weight: 600;
      font-size: 72px;
      line-height: 88px;
      color: rgba(255, 255, 255, 0.2);
      top: -50%;
      left: -50%;
      white-space: nowrap;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 52px;
        left: -30%;
      }
      @media (max-width: 500px) {
        font-size: 42px;
        left: -30%;
      }

    }

  }
`

const AboutUsContent = styled.div`
  //width: 50%;
  .text_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .text {
    width: 50%;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 27px;
    @media(max-width: 768px){
      width: 90%;
      font-size: 15px;
    }
    :first-child {
      margin-right: 50px;
      @media(max-width: 768px){
        margin-right: 0;
      }
    }

    :last-child {
      margin-left: 50px;
      @media(max-width: 768px){
        margin-right: 0;
      }
    }
  }

  .button {
    text-align: center;

    button {
      cursor: pointer;

      font-weight: 600;
      padding: 10px;
      border: 2px solid #FFFFFF;
      outline: none;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #FFFFFF;
      background: transparent;
      transition: all 0.3s ease;
      text-transform: uppercase;

      :hover {
        background: #fff;
        color: #000;

      }
    }
  }
`