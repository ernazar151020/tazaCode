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
				x
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
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.3571 13.3574H11.0388V9.72686C11.0388 8.86113 11.0234 7.74665 9.83311 7.74665C8.62567 7.74665 8.44091 8.68994 8.44091 9.66385V13.3572H6.12272V5.89131H8.3482V6.9116H8.37936C8.60208 6.53078 8.92392 6.2175 9.3106 6.00512C9.69729 5.79274 10.1343 5.68921 10.5752 5.70557C12.9249 5.70557 13.3581 7.25111 13.3581 9.26176L13.3571 13.3574ZM3.50689 4.87083C2.76388 4.87095 2.16145 4.2687 2.16133 3.52569C2.1612 2.78269 2.76339 2.18025 3.5064 2.18013C4.24941 2.17994 4.85184 2.7822 4.85196 3.5252C4.85203 3.88201 4.71036 4.22423 4.45811 4.47658C4.20586 4.72893 3.8637 4.87075 3.50689 4.87083ZM4.66605 13.3575H2.34535V5.89131H4.66598V13.3574L4.66605 13.3575ZM14.5128 0.0271397H1.18045C0.550328 0.0200501 0.0335797 0.52482 0.0258789 1.15494V14.5429C0.0333352 15.1734 0.550023 15.6786 1.18039 15.672H14.5128C15.1445 15.6798 15.6632 15.1746 15.672 14.5429V1.1539C15.663 0.522559 15.1442 0.0178498 14.5128 0.0261007" fill="#DF0606"/>
								<defs>
									<clipPath id="clip0_352_8">
										<rect width="15.6461" height="15.6461" fill="white" transform="translate(0.0268555 0.0267334)"/>
									</clipPath>
								</defs>
							</svg>

						</a>

					</div>
					<div className="social_icon">
						<a href={item?.social_media?.github} rel="noopener noreferrer">
							<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.731 1.47803H2.4376C1.5121 1.47803 0.76123 2.18558 0.76123 3.05768V14.6418C0.76123 15.5139 1.5121 16.2215 2.4376 16.2215H14.731C15.6565 16.2215 16.4073 15.5139 16.4073 14.6418V3.05768C16.4073 2.18558 15.6565 1.47803 14.731 1.47803ZM10.4457 14.1054C10.1524 14.1547 10.0441 13.9836 10.0441 13.8421C10.0441 13.6644 10.0511 12.7561 10.0511 12.0222C10.0511 11.5088 9.86949 11.183 9.65645 11.0119C10.9487 10.877 12.3107 10.7091 12.3107 8.60621C12.3107 8.00726 12.0837 7.70779 11.7135 7.32274C11.7729 7.18123 11.9719 6.59874 11.6541 5.84182C11.1687 5.70031 10.0581 6.4309 10.0581 6.4309C9.59708 6.30913 9.09766 6.24661 8.60523 6.24661C8.1128 6.24661 7.61338 6.30913 7.15238 6.4309C7.15238 6.4309 6.04179 5.70031 5.55634 5.84182C5.23853 6.59545 5.4341 7.17794 5.49697 7.32274C5.12677 7.70779 4.95215 8.00726 4.95215 8.60621C4.95215 10.6993 6.25483 10.877 7.54702 11.0119C7.37939 11.1534 7.22921 11.3969 7.17683 11.7458C6.84505 11.8873 5.99638 12.1308 5.48998 11.2883C5.17217 10.7684 4.59941 10.7256 4.59941 10.7256C4.03364 10.719 4.561 11.0613 4.561 11.0613C4.93818 11.2258 5.2036 11.8577 5.2036 11.8577C5.54237 12.8351 7.16286 12.506 7.16286 12.506C7.16286 12.9634 7.16984 13.7072 7.16984 13.8421C7.16984 13.9836 7.06507 14.1547 6.76821 14.1054C4.46321 13.3781 2.8497 11.3114 2.8497 8.89582C2.8497 5.87473 5.30139 3.58094 8.50744 3.58094C11.7135 3.58094 14.3119 5.87473 14.3119 8.89582C14.3154 11.3114 12.7507 13.3814 10.4457 14.1054ZM7.01967 12.0946C6.95331 12.1078 6.89045 12.0815 6.88346 12.0387C6.87648 11.9893 6.92188 11.9465 6.98824 11.9334C7.05459 11.9268 7.11746 11.9531 7.12444 11.9959C7.13492 12.0387 7.08952 12.0815 7.01967 12.0946ZM6.68789 12.065C6.68789 12.1078 6.6355 12.144 6.56565 12.144C6.48882 12.1506 6.43643 12.1144 6.43643 12.065C6.43643 12.0222 6.48882 11.986 6.55867 11.986C6.62502 11.9794 6.68789 12.0156 6.68789 12.065ZM6.20942 12.0288C6.19545 12.0716 6.1256 12.0913 6.06623 12.0716C5.99988 12.0584 5.95448 12.0091 5.96845 11.9663C5.98242 11.9235 6.05226 11.9037 6.11164 11.9169C6.18148 11.9366 6.22689 11.986 6.20942 12.0288ZM5.77985 11.8511C5.74842 11.8873 5.68207 11.8807 5.62968 11.8313C5.57729 11.7886 5.56332 11.726 5.59825 11.6964C5.62968 11.6602 5.69604 11.6668 5.74842 11.7162C5.79382 11.7589 5.81129 11.8248 5.77985 11.8511ZM5.46204 11.5516C5.43061 11.5714 5.37124 11.5516 5.33282 11.5022C5.29441 11.4529 5.29441 11.3969 5.33282 11.3739C5.37124 11.3443 5.43061 11.3673 5.46204 11.4167C5.50046 11.466 5.50046 11.5253 5.46204 11.5516ZM5.23504 11.2324C5.2036 11.262 5.15122 11.2456 5.1128 11.2126C5.07438 11.1699 5.0674 11.1205 5.09883 11.0975C5.13026 11.0678 5.18265 11.0843 5.22107 11.1172C5.25948 11.16 5.26647 11.2094 5.23504 11.2324ZM5.00104 10.9889C4.98707 11.0185 4.94167 11.0251 4.90325 11.002C4.85785 10.9823 4.8369 10.9461 4.85087 10.9165C4.86484 10.8967 4.90325 10.8868 4.94866 10.9033C4.99406 10.9263 5.01501 10.9625 5.00104 10.9889Z" fill="#DF0606"/>
								<defs>
									<clipPath id="clip0_352_10">
										<rect width="15.6461" height="16.8496" fill="white" transform="translate(0.76123 0.424805)"/>
									</clipPath>
								</defs>
							</svg>

						</a>

					</div>
					<div className="social_icon">
						<a href={item?.social_media?.email} rel="noopener noreferrer">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.46 3.93237H4.57796C3.95951 3.93237 3.36639 4.17805 2.92908 4.61536C2.49177 5.05267 2.24609 5.64579 2.24609 6.26424V14.0371C2.24609 14.6556 2.49177 15.2487 2.92908 15.686C3.36639 16.1233 3.95951 16.369 4.57796 16.369H15.46C16.0785 16.369 16.6716 16.1233 17.1089 15.686C17.5462 15.2487 17.7919 14.6556 17.7919 14.0371V6.26424C17.7919 5.64579 17.5462 5.05267 17.1089 4.61536C16.6716 4.17805 16.0785 3.93237 15.46 3.93237ZM15.46 5.48695L10.4076 8.96144C10.2895 9.02966 10.1554 9.06558 10.019 9.06558C9.88255 9.06558 9.74851 9.02966 9.63035 8.96144L4.57796 5.48695H15.46Z" fill="#DF0606"/>
							</svg>

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
    font-size: 25px;
    line-height: 0;
    cursor: pointer;
    background: #000;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    z-index: 100;
  }

  .modal_content {
    max-width: 500px;
    max-height: 700px;
    overflow-y: scroll;
    background: #fff;
    padding: 20px;
    padding-top: 40px;
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