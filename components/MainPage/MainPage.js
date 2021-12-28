import styled from "styled-components"
import Image from "next/image";
import Bg from "../../assets/home-page-bg.svg";
import uygo from "../../assets/uygo-logo.svg"
import ime from "../../assets/ime.svg"
import medbase from "../../assets/medbase.png"
import mer from "../../assets/mer.svg"
import Link from "next/link"


const MainPage = () => {
	return <Wrapper id={"home"} name={"home"}>
		<Image src={Bg} layout={"fill"} className="background" objectFit={"cover"} objectPosition={"center"}/>
		<div className="container">
			<MainPageContent>
				<div>

					<div className="title">
						we enjoyed
						to collaborate with
					</div>
					<div className="projects">
						{/*<Link href={"/projects"}>*/}
							<div className="icon">
								<Image src={uygo}/>
							</div>
						{/*</Link>*/}
						{/*<Link href={"/projects"}>*/}
							<div className="icon">
								<Image src={ime}/>
							</div>
						{/*</Link>*/}
						{/*<Link href={"/projects"}>*/}
							<div className="icon">
								<Image src={mer}/>
							</div>
						{/*</Link>*/}
						{/*<Link href={"/projects"}>*/}
							<div className="icon">
								<Image src={medbase}/>
							</div>
						{/*</Link>*/}

					</div>
				</div>

			</MainPageContent>
		</div>
	</Wrapper>
}

export default MainPage

const Wrapper = styled.div`
  position: relative;
  //min-height: 100vh;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top left;
  transform: translateY(-126px);
  @media (max-width: 768px) {
    transform: translateY(0px);
  }


  .background {
    height: 100%;

    img {
    }
  }
`

const MainPageContent = styled.div`
  z-index: 20;
  position: relative;
  padding-top: 170px;
  padding-bottom: 70px;
  //padding-left: 25%;
  transform: translate(25%);
  @media (max-width: 768px) {
    padding-top: 50px;
    transform: translate(0);

  }


  .title {

    margin-top: 30px;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 70px;
    width: 50%;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
    0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    @media (max-width: 768px) {
      width: 90%;
      font-size: 38px;
    }
    //@keyframes neon2 {
    //  from {
    //    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
    //    0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    //  }
    //  to {
    //    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
    //    0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    //  }
    //}

  }

  .projects {
    backdrop-filter: blur(17.7515px);
    display: flex;
    align-items: center;

    .icon {
      padding: 30px 50px;
      margin-right: 50px;
      transition: all 0.3s linear;
      cursor: pointer;
      :hover{
        transform: scale(1.1);
        transition: all 0.3s linear;
      }
      @media (max-width: 768px) {
        padding: 30px 10px;
        margin-right: 10px;
      }

      span {
        transition: all 0.3s ease;
        @media (max-width: 768px) {
          width: 60px !important;
          height: 50px !important;
        }
      }

      img {

      }

    }
  }
`