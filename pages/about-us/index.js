import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import Bg from "../../assets/about-us-bg.svg";
import { teamsData } from "../../utils/pagesData/teamsData";
import { about_us_data } from "../../utils/pagesData/about_us_data";

const AboutUs = () => {
  const handleOpenModal = (item) => {};

  return (
    <Layout>
      <Wrapper>
        <AboutUsContent>
          <div className="background_img">
            <Image
              src={Bg}
              layout={"fill"}
              objectFit={"cover"}
              alt=""
              priority={true}
            />
          </div>
          <div className="container">
            <div className="about_header">
              <h1 className="title">about us </h1>
            </div>
            <p className="text">
              <p>
                TazaCode develops software, web and mobile applications, cloud
                systems, trade automation and business processes. We offer a
                full range of services for the creation of web solutions and
                mobile solutions, from design to delivery, industrial servers
                and support. <br /> <br /> Programming languages, used on the
                server-side, include ​​Python, PHP, JavaScript PostgreSQL and
                MySQL databases. <br /> <br /> On the client-side, programming
                languages include JavaScript and ReactJS libraries. <br />{" "}
                <br /> For the operating system we use Android Kotlin, Java,
                Flutter, and for iOS we use the Swift operating system. <br />{" "}
                <br /> We employ a top-down analytical approach to each project
                with a strong team of over thirty developers encompassing a
                broad spectrum of experience in commercial development. <br />{" "}
                <br /> These are some of our resources for any complex task.
              </p>
            </p>
            <h1 className="title">Why TAZA CODE? </h1>
            <p className="text">
              TAZA means transparent in the Kyrgyz language. We believe that
              transparency leads to excellent communications and better
              relations with our customers. Following this belief, we are
              totally focussed on your business effectiveness, increasing your
              profits through the technologies we can upbuild and embed in your
              company operations. Software development includes mobile, web
              applications and a smooth transition from old to new. TAZA CODE is
              ready to customise full-cycle software development and meet
              business specific requirements, bringing the customer a bespoke
              product, with specifications to meet a range of budgets.{" "}
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
        <div className="container"></div>
      </Wrapper>
    </Layout>
  );
};

export default AboutUs;

const Wrapper = styled.div``;

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
    margin-bottom: 50px;
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
    position: relative;
    z-index: 20;
    text-transform: uppercase;
    margin-bottom: 25px;
    text-align: center;
    margin-top: 20px;

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
    color: #ffffff;
    max-width: 70%;
    margin: 0 auto;
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;
const AboutMembers = styled.div`
  padding: 50px 0 70px;
  .items {
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
      color: #df0606;
      margin: 20px 0 5px;
    }

    .position {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #242424;
    }
  }
`;
