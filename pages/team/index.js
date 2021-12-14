import styled from "styled-components"
import {teamsData} from "../../utils/pagesData/teamsData";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import Bg from "../../assets/teams/team-bg.svg"
import BgBottom from "../../assets/teams/team-bg-bottom.svg"
import {useGlobalContext} from "../../context/Context";

const Team = () => {


	const {handleOpenModal} = useGlobalContext()


	return <Layout>
		<Wrapper>
			<div className="background-for-top">
				<Image src={Bg}/>
			</div>
			<div className="background-for-bottom">
				<Image src={BgBottom}/>
			</div>
			<div className="container">
				<TeamHeader>
					<div className="titles">
						<h1 className="title">our team</h1>
					</div>
					<div className="button">
					</div>
				</TeamHeader>
				<TeamContent>
					{
						teamsData.map((item, index) => {
							return <div className="team_item" key={index} onClick={(e) => handleOpenModal(e ,item)}>
								<div className="image">
									<Image src={item.image}/>
								</div>
								<div className="title">
									{item.name}
								</div>
								<div className="position">
									{item.position}
								</div>
							</div>
						})
					}
				</TeamContent>
			</div>
		</Wrapper>
	</Layout>

}

export default Team

const Wrapper = styled.div`
  padding: 68px 0 91px;
position: relative;
  .background-for-top {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .background-for-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

`

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 93px;

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #DF0606;

    position: relative;
    z-index: 20;
    text-transform: uppercase;

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
      //left: -10%;

    }

  }
`
const TeamContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  text-align: center;
  text-transform: uppercase;

  .team_item {
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 10px;

    :hover {
      box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.4);

    }
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
  }

  .position {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #242424;
  }
`