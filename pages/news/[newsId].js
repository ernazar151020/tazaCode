import styled from "styled-components"
import Image from "next/image";
import Bg from "../../assets/news/news-bg.svg"
import Bg_image from "../../assets/news/news-1.svg"
import Share from "../../components/Share/Share";
import Layout from "../../components/Layout/Layout";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {newsData} from "../../utils/pagesData/NewsData";

const NewsDetail = () => {
	const [newsDetail, setNewsDetail] = useState(null)
	const {query} = useRouter()


	useEffect(() => {
		const findById = newsData.find((item) => item.id === Number(query.newsId))

		setNewsDetail({...findById})
	}, [])


	return <Layout>
		<Wrapper>

			<NewsHeader>
				<div className="background_img">
					<Image src={Bg}/>
				</div>
				<div className="container">
					<div className="header">
						<div className="titles">
							<h3 className="title">/technews/</h3>
							<h1 className="subtitle">{newsDetail?.title}</h1>
						</div>
					</div>
					<div className="header_content">
						<div className="info">
							<div className="author">
								author: 	{newsDetail?.author}
							</div>
							{/*<div className="date">*/}
							{/*	{newsDetail?.date}*/}
							{/*</div>*/}
						</div>
						<div className="image">
							{
								newsDetail?.image && 	<Image
									src={newsDetail?.image} width={"300"} height={"200"}
								/>
							}

						</div>
					</div>
				</div>

			</NewsHeader>
			<NewContent>
				<div className="container">
					<p className="text">{newsDetail?.text}</p>
				</div>
				<div className="share">
					<Share/>
				</div>
			</NewContent>

		</Wrapper>
	</Layout>
}

export default NewsDetail

const Wrapper = styled.div`
  padding: 0 0 98px;
  z-index: 20;



`

const NewsHeader = styled.div`
  position: relative;
  background: #000;
  min-height: 80vh;
  padding: 50px 0;

  .background_img {
    position: absolute;
    bottom: -40%;
    left: 0;
    //z-index: -1;

    img {

    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 89px;
    background: #000;

  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    margin-bottom: 11px;
    text-align: center;
  }

  .subtitle {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #fff;
    position: relative;
    z-index: 20;
    text-transform: uppercase;

  }

  .header_content {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    position: relative;
    z-index: 100;

    .info {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      text-transform: uppercase;

      .author {
        margin-bottom: 15px;
      }

      .date {

      }
    }

    .image {
      width: 100%;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }
  }

`

export const NewContent = styled.div`
  position: relative;
  padding: 130px 0 100px;
  background: #fff;

  .text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: justify;
    text-transform: capitalize;
    color: #000000;

  }

  .share {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`