import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTelegram, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


const social_media_data = [
	// {
	// 	phone_link:"",
	// 	icon:faFacebookF
	// },
	{
		phone_link:"https://www.instagram.com/smartpost.kg/?hl=ru",
		icon:faInstagram
	},{
		phone_link:"https://wa.me/+996997948888",
		icon:faWhatsapp
	},
	// {
	// 	phone_link:"",
	// 	icon:faTwitter
	// }
	// ,
	{
		phone_link:"tg://resolve?domain=tazacode",
		icon:faTelegram
	},
]

const Share = () => {
	return <Wrapper>
		<div className="social_icons">
			<h3>follow us : </h3>
			<div className="social_icons_inner">
				{
					social_media_data.map((item,index)=>{
						return 	<div className="social_icon" key={index}>
							<Link href={item.phone_link}>
								<a target="_blank">
									<FontAwesomeIcon icon={item.icon}/>
								</a>
							</Link>

						</div>
					})
				}
			</div>

		</div>
	</Wrapper>
}

export default Share

const Wrapper = styled.div`
  .social_icons {
    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      //text-align: center;
      text-transform: capitalize;

      color: #DF0606;
    }

    .social_icons_inner {
      display: flex;
      .social_icon{
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
        border: 0.626374px solid #DF0606;
        margin-top: 10px;
        svg {
          color: #DF0606;
          display: block;
          font-size: 25px;
          transition: all 0.3s ease;
          //margin-right: 16px;
        }
        :hover{
          svg{
            margin-bottom: 10px;

          }
        }
      }

    }

  }

`