import styled from "styled-components"
import {newsData} from "../../utils/pagesData/NewsData";
import Image from "next/image";
import {faChevronLeft, faArrowRight, faWindowMinimize} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Layout from "../../components/Layout/Layout";
import {useRouter} from "next/router";

const News = () => {

	const router = useRouter()
	const handlePushToNewsDetail = (id) => {
		router.push(`/news/${id}`)
	}

	return <Layout>
		<Wrapper>
			<div className="container">
				<div className="news_header">
					<div className="titles">
						<h3 className="title">/technews/</h3>
						<h1 className="subtitle">our latest news</h1>
					</div>
				</div>
				<NewsContent>
					{
						newsData.map((item, index) => {
							return <div className="news-item" key={index}
							            onClick={() => handlePushToNewsDetail(item.id)}>
								<div className="item_image">
									<Image src={item.image} width={"300"} height={"200"}/>

								</div>
								<div className="category">
									{item.category}
								</div>

								<div className="item_info">
									<div className="date_and_author">
										{/*<span>{item.date}</span> */}
										by

										<span>{item.author}</span>
									</div>
									<div className="title">
										<div>{item.title}</div>
									</div>
									<div className="button">
										<span><FontAwesomeIcon icon={faArrowRight}/></span>
										<span>learn more</span>
									</div>
								</div>

							</div>
						})
					}

				</NewsContent>
			</div>
		</Wrapper>
	</Layout>
}

export default News

const Wrapper = styled.div`
  padding: 56px 0 53px;

  .news_header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 89px;
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #242424;
    margin-bottom: 11px;
    text-align: center;
  }

  .subtitle {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #DF0606;
    position: relative;
    z-index: 20;
    text-transform: uppercase;

    :before {
      content: "our latest news";
      position: absolute;
      font-weight: 600;
      font-size: 72px;
      line-height: 88px;
      color: rgba(36, 36, 36, 0.1);
      top: -50%;
      left: -50%;
      white-space: nowrap;
      text-transform: uppercase;
      //left: -10%;

    }

  }
`


const NewsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 70px;

  .news-item {
    text-transform: uppercase;
    background: #FFFFFF;
    box-shadow: 0px 10px 18px rgba(204, 204, 204, 0.4);
    cursor: pointer;
    position: relative;
    max-width: 340px;
    margin: 0 auto;

    .item_image {
      overflow: hidden;
      position: relative;
      margin: 0 auto;
      width: 300px;

      img {
        margin: 0 auto;
        height: 240px;
        width: 100%;
        object-fit: cover;
        transition: all .3s ease;
      }

    }

    :hover {
      box-shadow: 0px 10px 18px rgba(204, 204, 204, 0.9);

      .item_image img {
        transform: scale(1.1);
      }
    }

    .category {
      position: absolute;
      //top: 0;
      transform: translateY(-15px);
      left: 20px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #FFFFFF;
      padding: 5px 15px;
      background: #DF0606;
    }
  }

  .item_info {
    padding: 30px 30px 20px 30px;
  }


  .date_and_author {
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    color: #A5B1C2;
    margin-bottom: 17px;
    text-align: center;
  }

  .title {
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    color: #000000;
    padding: 10px;
  }

  .button {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #DF0606;
    display: flex;
    align-items: center;
    position: absolute;
    left: 30%;
    bottom: 10px;

    svg {
      color: red;
      font-size: 22px;
      margin-right: 10px;
    }
  }
`