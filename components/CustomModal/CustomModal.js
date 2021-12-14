import styled from "styled-components"
import {useGlobalContext} from "../../context/Context";
import Image from "next/image"
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Modal = () => {

	const {modalIsOpen, modalContent: item, handleOpenModal, setModalIsOpen} = useGlobalContext()


	return <Wrapper onClick={(e) => handleOpenModal(e)}>
		<div className={`modal ${modalIsOpen}`}>
			<div className="modal_content" onClick={() => setModalIsOpen("open-modal")}>
				<div className="image">
					{
						item?.image && <Image src={item.image}/>

					}
				</div>
				<div className="title">
					{item?.name}
				</div>
				<div className="position">
					{item?.position}
				</div>
				<div className="stacks">
					<div className="stack_title">stacks :</div>
					{
						item?.stacks.map((item, index) => {
							return <span key={index}>{item}</span>
						})
					}

				</div>
				<div className="social_media">
					<div className="social_icon">
						<a href={item?.social_media?.linkedin} target={"_blank"}>
							<FontAwesomeIcon icon={faLinkedin}/>
						</a>

					</div>
					<div className="social_icon">
						<a href={item?.social_media?.github} target={"_blank"}>
							<FontAwesomeIcon icon={faGithubSquare}/>
						</a>

					</div>
					<div className="social_icon">
						<a href={item?.social_media?.email} target={"_blank"}>
							<FontAwesomeIcon icon={faEnvelope}/>
						</a>

					</div>
				</div>
			</div>
		</div>
	</Wrapper>
}

export default Modal

const Wrapper = styled.div`
  .modal {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: all 0.3s ease;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;

  }

  .open-modal {
    transform: translateY(0);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .modal_content {
    background: #fff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    border: 2px solid red;
    transition: all 0.3s ease;

  }

  .image {
    overflow: hidden;

    img {
      height: 240px;
      object-fit: cover;
      width: 100%;
      transition: all 0.4s ease;
      @media (max-width: 768px) {
        height: 200px;
      }
    }
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #DF0606;
    margin: 20px 0 5px;
    @media (max-width: 768px) {
      font-size: 18px;
    }

  }

  .position {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #242424;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  .stacks {
    display: flex;
    margin-top: 30px;

    span {
      font-weight: 600;
      font-size: 15.5382px;
      line-height: 19px;
      text-align: center;
      color: #DF0606;
    }

    span.stacks_title {
      font-weight: 600;
      font-size: 15.5382px;
      line-height: 19px;
      text-align: center;
      color: #242424;
      margin-right: 10px;

    }
  }

  .social_media {
    display: flex;
    margin-top: 30px;

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
      border: 1px solid red;

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


`