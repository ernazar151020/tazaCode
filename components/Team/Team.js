import styled from "styled-components"
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import Bg from "../../assets/teams/team-bg-bottom.svg"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCore, {
	Pagination, Navigation
} from 'swiper';
import {teamsData} from "../../utils/pagesData/teamsData";
import {useGlobalContext} from "../../context/Context";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Team = () => {

	const {handleOpenModal} = useGlobalContext()

	return <Wrapper id={"team"}>
		<div className="background">
			<Image src={Bg}/>
		</div>
		<div className="container">
			<TeamHeader>
				<div className="titles">
					<h1 className="title">our team</h1>
				</div>
				<div className="button">
				</div>
			</TeamHeader>
			<Swiper slidesPerView={3} breakpoints={{

				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 3,
					spaceBetween: 40
				}
			}}
			        navigation={true} spaceBetween={30} scrollbar={{draggable: true}} pagination={{
				"clickable": true

			}} className="mySwiper">
				{
					teamsData.map((item, index) => {
						return <SwiperSlide key={index}>
							<div className="team_item" onClick={(e) => handleOpenModal(e , item)}>
								<div className="image">
									<Image src={item.image} alt=""/>
								</div>
								<div className="title">
									{item.name}
								</div>
								<div className="position">
									{item.position}
								</div>
							</div>

						</SwiperSlide>
					})
				}

			</Swiper>
		</div>

	</Wrapper>
}

export default Team

const Wrapper = styled.div`
  padding: 53px 0 90px;
  position: relative;

  .background {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  .swiper {
    width: 100%;
    height: 100%;
    padding: 40px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-horizontal > .swiper-scrollbar {

    display: none;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev, .swiper-rtl .swiper-button-next {
    color: red;
  }

  .swiper-button-next, .swiper-rtl .swiper-button-prev {
    color: red;
  }

  .team_item {
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 10px;
    text-transform: uppercase;

    :hover {
      box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.4);

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
  }



`

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 93px;
  @media (max-width: 768px) {
    justify-content: center;
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #DF0606;

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
      content: "our team ";
      position: absolute;
      font-weight: 600;
      font-size: 72px;
      line-height: 88px;
      color: rgba(36, 36, 36, 0.2);
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