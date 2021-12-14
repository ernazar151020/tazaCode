import styled from "styled-components"
import {useRouter} from "next/router";
import Layout from "../../components/Layout/Layout";

const Services = () => {



	return <Layout>
		<div className="container">

		
		</div>
	</Layout>
}

export default Services

const Wrapper = styled.div`
  padding: 47px 0 105px;

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #DF0606;
    margin-bottom: 11px;
  }

  .subtitle {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #242424;
    position: relative;
    z-index: 20;

    :before {
      content: "we deliver";
      position: absolute;
      font-weight: 600;
      font-size: 72px;
      line-height: 88px;
      color: rgba(0, 0, 0, 0.1);
      top: -50%;
      //left: -10%;

    }

  }

`