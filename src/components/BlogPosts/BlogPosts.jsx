import react, { useState } from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../Containers/PageContainer";
import Marginer from "../../Containers/Marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Title as Header, Span } from "../../Containers/FeaturesContainer";
import { deviceSize } from "../../Containers/resposive";
import { Link } from "react-router-dom";

const BlogContainer = styled.div`
  width: 100%;
  background-color: #efeff0;
  padding: 80px 0;
`;
const HeaderConatainer = styled.div`
  display: flex;
  justify-content: Center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
const ChevronContainer = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  bottom: 14px;
  border-radius: 50%;
  display: flex;
  border: 1px solid transparent;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-in-out;
`;
const More = styled.span`
  color: #000;
  font-weight: 700;
  font-size: 14px;
  position: absolute;
  bottom: 17px;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out;
`;
const CardContainer = styled.div`
  width: 255px;
  background-color: #fff;
  position: relative;
  transition: all 0.7s ease-in-out;
  margin-right: 20px;

  &:hover ${ChevronContainer} {
    border: 1px solid #ff6363;
  }
  &:hover ${More} {
    /* visibility: visible; */
    right: ${({ isHover }) => (isHover ? "45px" : "45px")};
    opacity: ${({ isHover }) => (isHover ? "0" : "1")};
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
    margin-bottom: 20px;
  }
`;
const TopCard = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
`;
const BottomCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 25px 10px 60px 10px;
`;
const Date = styled.span`
  color: #907777;
  font-size: 11px;
`;
const Title = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: #ff6363;
  }
`;
const Content = styled.p`
  color: #000;
  line-height: 1.8;
  text-align: left;
  width: 90%;
  font-size: 14px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #ff6363;
  font-size: 11px;
`;

function BlogPost({ blogData, lodaing, error }) {
  const [isHover, setIsHover] = useState(true);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <BlogContainer>
      <HeaderConatainer>
        <Span>BLOG</Span>
        <Header>Blog Posts</Header>
      </HeaderConatainer>

      <InnerPageContainer maxWidth="85%">
        <PostsContainer>
          {blogData.map((item, index) => (
            <CardContainer
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              key={index}
            >
              <TopCard
                style={{
                  background: `url(${item.image}) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                // image={item.image}
              />
              <BottomCard>
                <Date>{item.date}</Date>
                <Marginer direction="vertical" margin={4} />

                <Title to="/">{item.header}</Title>
                <Marginer direction="vertical" margin={5} />
                <Content>{item.title}</Content>
              </BottomCard>
              <ChevronContainer>
                <Icon icon={faChevronRight} />
              </ChevronContainer>
              <More isHover={isHover}>Read More</More>
            </CardContainer>
          ))}
        </PostsContainer>
      </InnerPageContainer>
    </BlogContainer>
  );
}

export default BlogPost;
