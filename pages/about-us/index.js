import styled from "styled-components"
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import Bg from "../../assets/about-us-bg.svg";
import {teamsData} from "../../utils/pagesData/teamsData";
import {about_us_data} from "../../utils/pagesData/about_us_data";

const AboutUs = () => {

	const handleOpenModal = (item) => {
	}

	return <Layout>
		<Wrapper>

			<AboutUsContent>
				<div className="background_img">
					<Image src={Bg} layout={"fill"} objectFit={"cover"}/>
				</div>
				<div className="container">
					<div className="about_header">
						<h1 className="title">about us </h1>
					</div>
					<p className="text">
						{
							about_us_data.text
						}


					</p>
				</div>
			</AboutUsContent>
			{/*<AboutMembers>*/}
			{/*	<div className="container">*/}
			{/*		<div className="items">*/}
			{/*			{*/}
			{/*				teamsData.slice(0,3).map((item, index) => {*/}
			{/*					return <div className="team_item" key={index} onClick={() => handleOpenModal(item)}>*/}
			{/*						<div className="image">*/}
			{/*							<Image src={item.image}/>*/}
			{/*						</div>*/}
			{/*						<div className="title">*/}
			{/*							{item.name}*/}
			{/*						</div>*/}
			{/*						<div className="position">*/}
			{/*							{item.position}*/}
			{/*						</div>*/}
			{/*					</div>*/}
			{/*				})*/}
			{/*			}*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</AboutMembers>*/}
			<div className="container">

			</div>
		</Wrapper>
	</Layout>
}

export default AboutUs

const Wrapper = styled.div`

`

const AboutUsContent = styled.div`
  padding: 80px 0 270px;
  background: #000;
  position: relative;

  .background_img {
    position: absolute;
    inset: 0;

    img {
      width: 80%;
      height: 80% !important;
    }
  }

  .about_header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 88px;
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
      //left: -10%;

    }

  }

  .text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: justify;
    text-transform: capitalize;
    color: #FFFFFF;

  }
`
const AboutMembers = styled.div`
  padding: 50px 0 70px;
.items{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  text-align: center;
  text-transform: uppercase;

  .team_item {
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 10px;

    :hover {
      box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.4);

    }
  }

  .image {
    overflow: hidden;

    img {
      height: 240px;
      object-fit: cover;
      width: 100%;
      transition: all 0.4s ease;
    }
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #DF0606;
    margin: 20px 0 5px;
  }

  .position {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #242424;
  }
}`