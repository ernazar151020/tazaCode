import styled from "styled-components";
import Image from "next/image";
import Bg from "../../assets/projects_bg.svg";

const Projects = () => {
  return (
    <Wrapper id={"projects"} name={"projects"}>
      <div className="background_img">
        <Image src={Bg} alt="" priority={true} />
      </div>
      <div className="container">
        <div className="projects_header">
          <div className="titles">
            <h3 className="title">/case studies/</h3>
            <h1 className="subtitle">our projects</h1>
          </div>
        </div>
        <ProjectsContent>
          <div className="projects_item">technology</div>
          <div className="projects_item">design</div>
          <div className="projects_item">development</div>
          <div className="projects_item">ideas</div>
        </ProjectsContent>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  padding: 39px 0 56px;
  background: #df0606;
  position: relative;

  .background_img {
    position: absolute;
    bottom: -40%;
    //right: -20%;
    right: 0;
    //z-index: -1;

    img {
    }
  }

  .projects_header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    margin-bottom: 11px;
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
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 500px) {
      font-size: 26px;
    }

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
`;

const ProjectsContent = styled.div`
  margin-top: 60px;
  position: relative;
  z-index: 20;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }

  .projects_item {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
    padding: 20px 150px;
    border: 3px solid #ffffff;
    margin-bottom: 28px;
    //display:inline;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      font-size: 26px;
      padding: 10px 100px;
    }
    @media (max-width: 500px) {
      font-size: 22px;
      font-size: 26px;
      padding: 10px 70px;
    }

    :hover {
      background: #fff;
      color: #df0606;
    }
  }
`;
