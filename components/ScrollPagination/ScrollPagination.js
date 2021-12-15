import styled from "styled-components"
import {Link as LinkS} from 'react-scroll'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const ScrollPagination = () => {
	return <Wrapper>
		<ul>
			<li>
				<LinkS activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500}
				      exact={"true"} offset={-100}>
					<div className="dot">

					</div>
				</LinkS>
			</li>
			<li>
				<LinkS activeClass="active" className="home" to="services" spy={true} smooth={true} duration={500}
				      offset={-230}
				      exact={"true"}>
					<div className="dot">

					</div>
				</LinkS>
			</li>
			<li>
				<LinkS activeClass="active" className="home" to="projects" spy={true} smooth={true} duration={500}
				      offset={-200}
				      exact={"true"}>
					<div className="dot">

					</div>
				</LinkS>
			</li>
			<li>
				<LinkS activeClass="active" className="home" to="about-us" spy={true} smooth={true} duration={500}
				      offset={-200}
				      exact={"true"}>
					<div className="dot">

					</div>
				</LinkS>
			</li>
			<li>
				<LinkS activeClass="active" className="home" to="news" spy={true} smooth={true} duration={500}
				      offset={-200}
				      exact={"true"}>
					<div className="dot">

					</div>
				</LinkS>
			</li>
			<li>
				<LinkS activeClass="active" className="home" to="team" spy={true} smooth={true} duration={500}
				      offset={-200}
				      exact={"true"}>
					<div className="dot">

					</div>
				</LinkS>
			</li>

		</ul>
	</Wrapper>
}

export default ScrollPagination

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  right: 2%;
  top: 20%;

  ul {
    //background: blue;
    padding: 5px;
    position: relative;
    z-index: 100;

    li {
      cursor: pointer;

      .dot {
        width: 20px;
        height: 20px;
        background: #000;
        border-radius: 50%;
        position: relative;
        margin-top: 37px;
        border: 2px solid #fff;
        transition: all 0.4s ease;


        :before {
          content: "";
          position: absolute;
          bottom: -42px;
          left: 39%;
          height: 40px;
          width: 4px;
          background: #000;

        }

      }
    }

    svg {
      font-size: 20px;
      position: relative;
      height: 40px;

      path {
        position: relative;

        :before {
          content: "";
          position: absolute;
          height: 30px;
          width: 3px;
          background: red;
          bottom: 0;
          z-index: 100;
        }
      }

    }
  }

  .active {
    color: red;
    background: red;
    transition: all 0.4s ease;

    .dot {
      background: red;
      transform: scale(1.1);
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;

      :before {
        background: red;
      }
    }
  }

`