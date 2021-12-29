import styled from "styled-components"
import FooterForm from "./FooterForm";
import Link from "next/link"
import Share from "../Share/Share";




const Footer = () => {
	return <Wrapper>
		<div className="container">
			<FooterContent>
				<FooterInfo>
					<h1 className="title">contact us</h1>
					<div className="email_wrap">
						<h3>message us</h3>
						<div className="email">
							<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.09182 9.6001H31.4604C33.665 9.6001 34.7761 10.8293 34.7761 13.3293V30.8709C34.7761 33.3501 33.665 34.6001 31.4604 34.6001H8.09182C5.88723 34.6001 4.77612 33.3501 4.77612 30.8709V13.3293C4.77612 10.8293 5.88723 9.6001 8.09182 9.6001ZM19.7673 27.5168L31.6544 15.9959C32.0777 15.5793 32.4128 14.6209 31.8837 13.7668C31.3722 12.9126 30.4375 12.8918 29.8202 13.4126L19.7673 21.4543L9.73203 13.4126C9.11475 12.8918 8.18 12.9126 7.66854 13.7668C7.13944 14.6209 7.47454 15.5793 7.89782 15.9959L19.7673 27.5168Z" fill="white"/>
							</svg>
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
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M29.5831 24.9463L25.3534 29.142C24.7291 29.7823 23.9015 29.9993 23.0955 30.0002C19.5312 29.8935 16.1622 28.1426 13.396 26.3449C8.8554 23.0416 4.68924 18.9457 2.07449 13.996C1.07163 11.9205 -0.105068 9.27219 0.00735745 6.95547C0.0173825 6.08397 0.252233 5.22864 0.866009 4.66689L5.09567 0.439366C5.97397 -0.307709 6.82335 -0.0494094 7.3854 0.820791L10.7882 7.27334C11.1463 8.03777 10.9409 8.85681 10.4065 9.40304L8.84823 10.9605C8.75203 11.0923 8.69078 11.2423 8.68923 11.4056C9.28678 13.7186 11.0971 15.8505 12.6963 17.3177C14.2954 18.7849 16.0144 20.7727 18.2457 21.2432C18.5215 21.3202 18.8593 21.3472 19.0566 21.1638L20.8694 19.3202C21.4943 18.8466 22.3966 18.6151 23.0637 19.0023H23.0955L29.2332 22.6259C30.1343 23.1907 30.2282 24.2822 29.5831 24.9463Z" fill="white"/>
								<defs>
									<clipPath id="clip0_201_138">
										<rect width="30" height="30" fill="white"/>
									</clipPath>
								</defs>
							</svg>

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
