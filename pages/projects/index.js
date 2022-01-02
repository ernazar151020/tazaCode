import styled from "styled-components";
import Image from "next/image";
import Bg from "../../assets/teams/team-bg.svg";
import BgBottom from "../../assets/teams/team-bg-bottom.svg";
import Layout from "../../components/Layout/Layout";
import { projectsData } from "../../utils/pagesData/projectsData";

const Projects = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="background-for-top">
          <Image src={Bg} alt="" priority={true} />
        </div>
        <div className="background-for-bottom">
          <Image src={BgBottom} alt="" priority={true} />
        </div>
        <div className="container">
          <div className="projects_header">
            <div className="titles">
              <h3 className="title">/case studies/</h3>
              <h1 className="subtitle">we deliver</h1>
            </div>
          </div>

          <ProjectContent>
            {projectsData.map((item, index) => {
              return (
                <div className="single_project" key={index}>
                  <div className="title">{item.name}</div>
                  <div className="description">{item.description}</div>
                  <div className="image">
                    <Image src={item.image} alt="" priority={true} />
                  </div>
                </div>
              );
            })}
          </ProjectContent>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Projects;

const Wrapper = styled.div`
  background: #df0606;
  position: relative;
  padding: 50px 0 150px;

  .projects_header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    margin-bottom: 100px;
    position: relative;
    z-index: 20;
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    margin-bottom: 11px;
    position: relative;
    z-index: 20;
  }

  .subtitle {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #fff;
    position: relative;
    z-index: 20;
    display: block;
    text-transform: uppercase;
    z-index: 20;

    :before {
      content: "our projects";
      position: absolute;
      font-weight: 600;
      font-size: 72px;
      line-height: 88px;
      color: rgba(255, 255, 255, 0.3);
      top: -50%;
      white-space: nowrap;
      left: -144%;
      text-transform: uppercase;
      z-index: 20;
    }
  }

  .background-for-top {
    position: absolute;
    right: 0;
    top: 0;
    //z-index: -1;
  }

  .background-for-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    //z-index: -1;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  z-index: 20;

  .single_project {
    margin-bottom: 40px;
    .title {
      font-weight: 600;
      font-size: 48px;
      line-height: 59px;
      text-align: center;
      color: #ffffff;
    }

    .description {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      width: 60%;
      margin: 0 auto;
      margin: 20px auto 80px;
    }

    .image {
      margin: 0 auto;
      text-align: center;
      img {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;
