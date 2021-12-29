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
		icon:<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.7908 9.52967C10.9949 9.52967 9.5293 10.9953 9.5293 12.7912C9.5293 14.5871 10.9949 16.0528 12.7908 16.0528C14.5868 16.0528 16.0524 14.5871 16.0524 12.7912C16.0524 10.9953 14.5868 9.52967 12.7908 9.52967ZM22.573 12.7912C22.573 11.4406 22.5853 10.1022 22.5094 8.75404C22.4336 7.18811 22.0763 5.79834 20.9313 4.65325C19.7837 3.50572 18.3964 3.15094 16.8305 3.07509C15.4798 2.99924 14.1415 3.01147 12.7933 3.01147C11.4427 3.01147 10.1043 2.99924 8.75612 3.07509C7.19018 3.15094 5.80042 3.50816 4.65533 4.65325C3.50779 5.80079 3.15301 7.18811 3.07716 8.75404C3.00131 10.1047 3.01355 11.443 3.01355 12.7912C3.01355 14.1394 3.00131 15.4802 3.07716 16.8284C3.15301 18.3943 3.51024 19.7841 4.65533 20.9292C5.80287 22.0767 7.19018 22.4315 8.75612 22.5073C10.1067 22.5832 11.4451 22.571 12.7933 22.571C14.1439 22.571 15.4823 22.5832 16.8305 22.5073C18.3964 22.4315 19.7862 22.0743 20.9313 20.9292C22.0788 19.7816 22.4336 18.3943 22.5094 16.8284C22.5877 15.4802 22.573 14.1418 22.573 12.7912ZM12.7908 17.8095C10.0138 17.8095 7.77252 15.5683 7.77252 12.7912C7.77252 10.0141 10.0138 7.77289 12.7908 7.77289C15.5679 7.77289 17.8092 10.0141 17.8092 12.7912C17.8092 15.5683 15.5679 17.8095 12.7908 17.8095ZM18.0147 8.73936C17.3663 8.73936 16.8427 8.21575 16.8427 7.56736C16.8427 6.91896 17.3663 6.39536 18.0147 6.39536C18.6631 6.39536 19.1867 6.91896 19.1867 7.56736C19.1869 7.72132 19.1567 7.87381 19.0979 8.01609C19.0391 8.15837 18.9527 8.28765 18.8439 8.39652C18.735 8.50539 18.6057 8.59171 18.4634 8.65054C18.3212 8.70937 18.1687 8.73956 18.0147 8.73936Z" fill="#DF0606"/>
		</svg>

	},{
		phone_link:"https://wa.me/+996997948888",
		icon:<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="19.2088" cy="18.7912" r="18.478" fill="white" stroke="#DF0606" stroke-width="0.626374"/>
			<path d="M28.2546 10.144L9.74522 17.2816C8.48203 17.7889 8.48934 18.4936 9.51346 18.8078L14.2655 20.2902L25.2605 13.3532C25.7804 13.0368 26.2554 13.207 25.8649 13.5536L16.9569 21.5931H16.9548L16.9569 21.5941L16.6291 26.4924C17.1093 26.4924 17.3212 26.2721 17.5905 26.0122L19.8987 23.7677L24.6999 27.314C25.5852 27.8015 26.2209 27.551 26.4412 26.4945L29.5929 11.6411C29.9155 10.3476 29.0991 9.76195 28.2546 10.144Z" fill="#DF0606"/>
		</svg>


	},
	// {
	// 	phone_link:"",
	// 	icon:faTwitter
	// }
	// ,
	{
		phone_link:"tg://resolve?domain=tazacode",
		icon:<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.56498 23.2304L3.97641 18.0441C3.04639 16.4498 2.55777 14.6366 2.56081 12.7909C2.56081 7.02511 7.2346 2.35132 13.0004 2.35132C18.7661 2.35132 23.4399 7.02511 23.4399 12.7909C23.4399 18.5567 18.7661 23.2304 13.0004 23.2304C11.1555 23.2334 9.34303 22.7452 7.74927 21.8159L2.56498 23.2304ZM9.23273 7.89264C9.09791 7.90101 8.96618 7.93652 8.84542 7.99703C8.73217 8.06116 8.6288 8.14133 8.5385 8.23506C8.41322 8.35302 8.34223 8.45533 8.26603 8.55451C7.88019 9.05664 7.67265 9.67302 7.67619 10.3063C7.67828 10.8178 7.8119 11.3158 8.0207 11.7814C8.44767 12.723 9.15026 13.72 10.0783 14.6439C10.3017 14.8663 10.5199 15.0897 10.7548 15.2974C11.9067 16.3116 13.2794 17.043 14.7636 17.4334L15.3576 17.5242C15.5508 17.5346 15.7439 17.52 15.9381 17.5106C16.2421 17.4949 16.539 17.4126 16.8077 17.2695C16.9444 17.199 17.0778 17.1224 17.2075 17.0398C17.2075 17.0398 17.2524 17.0106 17.338 16.9458C17.4789 16.8414 17.5656 16.7673 17.6825 16.6452C17.7692 16.5554 17.8443 16.4499 17.9017 16.3299C17.9832 16.1597 18.0646 15.8351 18.098 15.5647C18.1231 15.358 18.1157 15.2452 18.1126 15.1753C18.1084 15.0636 18.0155 14.9477 17.9143 14.8986L17.3067 14.6262C17.3067 14.6262 16.3984 14.2305 15.8441 13.9779C15.7857 13.9524 15.723 13.9379 15.6593 13.9351C15.5879 13.9277 15.5157 13.9358 15.4477 13.9586C15.3796 13.9815 15.3172 14.0187 15.2647 14.0676V14.0655C15.2595 14.0655 15.1895 14.1251 14.4348 15.0396C14.3914 15.0978 14.3318 15.1418 14.2633 15.1659C14.1949 15.1901 14.1209 15.1934 14.0506 15.1753C13.9826 15.1571 13.9159 15.1341 13.8512 15.1064C13.7217 15.0521 13.6768 15.0312 13.5881 14.9926L13.5829 14.9905C12.9857 14.7297 12.4327 14.3775 11.9439 13.9465C11.8123 13.8317 11.6902 13.7064 11.5649 13.5853C11.1542 13.192 10.7963 12.747 10.5001 12.2616L10.4385 12.1624C10.3943 12.0958 10.3585 12.0239 10.332 11.9484C10.2923 11.7949 10.3957 11.6718 10.3957 11.6718C10.3957 11.6718 10.6494 11.3941 10.7673 11.2437C10.8656 11.1188 10.9572 10.9888 11.0419 10.8543C11.1651 10.656 11.2037 10.4524 11.139 10.2948C10.8467 9.58072 10.5439 8.86978 10.2328 8.16407C10.1712 8.02418 9.98855 7.92396 9.82256 7.90412C9.76619 7.89786 9.70982 7.89159 9.65344 7.88742C9.51325 7.88045 9.37276 7.88185 9.23273 7.89159V7.89264Z" fill="#DF0606"/>
		</svg>

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
									<span>{item.icon}</span>
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