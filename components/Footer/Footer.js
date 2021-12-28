import styled from "styled-components"
import {
	faEnvelope,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faWhatsapp, faTwitter, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FooterForm from "./FooterForm";
import Link from "next/link"
import Share from "../Share/Share";


const social_media_data = [
	// {
	// 	phone_link:"",
	// 	icon:faFacebookF
	// },
	{
		phone_link: "https://www.instagram.com/smartpost.kg/?hl=ru",
		icon: faInstagram
	}, {
		phone_link: "https://wa.me/+996997948888",
		icon: faWhatsapp
	},
	// {
	// 	phone_link:"",
	// 	icon:faTwitter
	// }
	// ,
	{
		phone_link: "tg://resolve?domain=tazacode",
		icon: faTelegram
	},
]

const Footer = () => {
	return <Wrapper>
		<div className="container">
			<FooterContent>
				<FooterInfo>
					<h1 className="title">contact us</h1>
					<div className="email_wrap">
						<h3>message us</h3>
						<div className="email">
							<FontAwesomeIcon icon={faEnvelope}/>
							<Link href={"mailto:tazacode@gmail.com"}>
								<a target={"_blank"}>tazacode@gmail.com</a>
							</Link>
						</div>
					</div>
					<div className="phone_wrap">
						<h3>call us</h3>
						{/*<div className="phone">*/}
						{/*	<FontAwesomeIcon icon={faPhoneAlt}/>*/}
						{/*	<a href="tel:+996666655555555">+996 6666 5555 5555</a>*/}
						{/*</div>*/}
						<div className="phone">
							<FontAwesomeIcon icon={faPhoneAlt}/>
							<a href="tel:+996997948888">+996997948888</a>
						</div>
					</div>
					<div className="social_icons">
						<Share/>

					</div>
				</FooterInfo>
				<FooterForm/>
			</FooterContent>
		</div>
	</Wrapper>
}

export default Footer

const Wrapper = styled.footer`
  position: relative;
  z-index: 20;
  background: #000000;
  padding: 36px 0 58px;
`
const FooterContent = styled.div`
  //display: grid;
  //grid-template-columns: 0.5fr 1fr;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`
const FooterInfo = styled.div`
  //margin-right: 230px;
  width: 60%;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    color: #DF0606;
    margin-bottom: 28px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .email_wrap {
    margin-bottom: 42px;
    @media (max-width: 768px) {
      margin-bottom: 32px;
    }

    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      margin-bottom: 35px;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 15px;
      }
    }

    .email {
      display: flex;
      //justify-content: space-between;
      align-items: center;
      color: #fff;
      @media (max-width: 768px) {
        justify-content: center;
      }


      svg {
        font-size: 30px;
        margin-right: 16px;
      }

      a {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: lowercase;
        color: #FFFFFF;
        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }


  .phone_wrap {
    margin-bottom: 42px;
    @media (max-width: 768px) {
      margin-bottom: 32px;
    }

    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      margin-bottom: 35px;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 15px;
      }
    }

    .phone {
      display: flex;
      //justify-content: space-between;
      align-items: center;
      color: #fff;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        justify-content: center;
      }

      svg {
        font-size: 30px;
        margin-right: 16px;
      }

      a {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: lowercase;
        color: #FFFFFF;
        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 20px;
        }

        :hover {
          text-decoration: underline;
        }
      }
    }

  }

  .social_icons {
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      margin-bottom: 35px;
      text-transform: uppercase;
    }

    .social_icons_inner {
      display: flex;
      @media (max-width: 768px) {
        justify-content: center;
      }

      .social_icon {
        height: 37px;
        width: 37px;
        border-radius: 50%;
        background: #fff;
        display: inline;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;

        svg {
          color: #DF0606;
          display: block;
          font-size: 25px;
          transition: all 0.3s ease;
          //margin-right: 16px;
        }

        :hover {
          svg {
            margin-bottom: 10px;

          }
        }
      }

    }

  }
`
