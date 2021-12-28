import styled from "styled-components"
import {useGlobalContext} from "../../context/Context";
import Image from "next/image"
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope , faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Modal = () => {

	const {modalIsOpen, modalContent: item, handleOpenModal, setModalIsOpen} = useGlobalContext()


	return <Wrapper >
		<div className={`modal ${modalIsOpen}`}>

			<div className="modal_content" onClick={() => setModalIsOpen("open-modal")}>
				<div className = "closing_icon" onClick={(e) => handleOpenModal(e)}>
					<FontAwesomeIcon icon={faTimes}/>
				</div>
				<div className="image">
					{
						item?.image && <Image src={item.image} width={"290"} height={"200"} />

					}
				</div>
				<div className="title">
					{item?.name}
				</div>
				<div className="position">
					{item?.dev_type}
				</div>
				<div className="stacks">
					<div className="stack_title">stacks :</div>
					{
						item?.skills?.slice(0,10).map((item, index) => {
							return <span key={index}> {item} ,  </span>
						})
					}

				</div>
				<div className="social_media">
					<div className="social_icon">
						<a href={item?.social_media?.linkedin} rel="noopener noreferrer">
							<FontAwesomeIcon icon={faLinkedin}/>
						</a>

					</div>
					<div className="social_icon">
						<a href={item?.social_media?.github} rel="noopener noreferrer">
							<FontAwesomeIcon icon={faGithubSquare}/>
						</a>

					</div>
					<div className="social_icon">
						<a href={item?.social_media?.email} rel="noopener noreferrer">
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
  max-width: 400px;
  overflow-y:scroll ;

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
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  
  .closing_icon{
    position: absolute;
    top: 0;
    right: 0px;
    color: red;
    font-size: 30px;
    line-height: 0;
    cursor: pointer;
    background: #000;
    padding: 7px;
    z-index: 100;
  }

  .modal_content {
    max-width: 500px;
    max-height: 700px;
    overflow-y: scroll;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    border: 2px solid red;
    transition: all 0.3s ease;
    position: relative;

  }


  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #DF0606;
    margin: 10px 0 5px;
    @media (max-width: 768px) {
      font-size: 18px;
    }

  }

  .position {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #242424;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  .stacks {
    //display: flex;
    margin-top: 20px;
    max-width: 60%;
    word-wrap: break-word;
    //max-width: 100px;
    .stack_title {
      text-align: center;

      font-weight: 600;
      font-size: 15.5382px;
      line-height: 19px;
      //text-align: center;
      margin-right: 10px;
      color: #DF0606;


    }
    span {
      word-wrap: break-word;
      font-weight: 700;
      font-size: 15.5382px;
      line-height: 25px;
      text-align: center;
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