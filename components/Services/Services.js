import styled from "styled-components"
import {servicesData} from "./ServicesData";
import Image from "next/image";
import Bg from "../../assets/services/background-img.svg"

const Services = () => {
	return <Wrapper id={"services"}>
		<div className="background_img">
			<Image src={Bg}/>
		</div>
		<div className="container">
			<div className="services_header">
				<div className="titles">
					<h3 className="title">/our services/</h3>
					<h1 className="subtitle">we deliver</h1>
				</div>
				{/*<div className="button">*/}
				{/*	<button className="custom_button">all services</button>*/}
				{/*</div>*/}
			</div>
			<ServicesContent>
				{
					servicesData.map((item, index) => {
						return <div className="services_item" key={index}>
							<div className="logo">
								<Image src={item.logo} alt=""/>
							</div>
							<h2 className="title">{item.title}</h2>
							<p className="description">{item.description}</p>
						</div>
					})
				}

			</ServicesContent>

		</div>
	</Wrapper>
}

export default Services

const Wrapper = styled.div`
  padding: 27px 0 55px;
  position: relative;
  min-height: 100vh;

  .background_img {
    position: absolute;
    bottom: -20%;
    left: 0;
    z-index: -1;

    img {

    }
  }

  .services_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      
      .button {
        display: none;
      }
    }

  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #DF0606;
    margin-bottom: 11px;
  }

  .subtitle {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #242424;
    position: relative;
    z-index: 20;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 500px) {
      font-size: 26px;
    }

    :before {
      content: "we deliver";
      position: absolute;
      font-weight: 600;
      font-size: 72px;
      line-height: 88px;
      color: rgba(0, 0, 0, 0.1);
      top: -50%;
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

const ServicesContent = styled.div`
  margin-top: 37px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .services_item {
    cursor: pointer;
    padding: 54px 35px;
    transition: all 0.3s ease;

    :hover {
      background: #FFFFFF;
      box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.4);
    }
  }

  .logo {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    text-align: center;
    margin-bottom: 29px;
  }

  .description {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
`