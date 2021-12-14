import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTelegram, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Share = () => {
	return <Wrapper>
		<div className="social_icons">
			<h3>follow us : </h3>
			<div className="social_icons_inner">
				<div className="social_icon">
					<a href="#">
						<FontAwesomeIcon icon={faFacebookF}/>
					</a>
				</div>
				<div className="social_icon">
					<a href="#">
						<FontAwesomeIcon icon={faInstagram}/>
					</a>
				</div>
				<div className="social_icon">
					<a href="#">
						<FontAwesomeIcon icon={faWhatsapp}/>
					</a>
				</div>
				<div className="social_icon">
					<a href="#">
						<FontAwesomeIcon icon={faTwitter}/>
					</a>
				</div>
				<div className="social_icon">
					<a href="#">
						<FontAwesomeIcon icon={faTelegram}/>
					</a>
				</div>

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
      text-align: center;
      text-transform: capitalize;

      color: #000000;
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