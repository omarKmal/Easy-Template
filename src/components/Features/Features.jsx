import React from "react";
import styled from "styled-components";
import Marginer from "../../Containers/Marginer";
import { ErrorText } from "../../Containers/FeaturesContainer";
import { deviceSize } from "../../Containers/resposive";

const FeaturesContainer = styled.div`
  width: 100%;
  text-align: center;
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Span = styled.span`
  color: #ff6363;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;
const Title = styled.h2`
  color: #000;
  font-weight: 600;
  font-size: 30px;
`;
const About = styled.p`
  color: #000;
  width: 50%;
  line-height: 1.8;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: center;
  }
`;

const FeatureContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: center;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 0 15px 30px 0 rgb(0 0 0 / 5%);

  img {
    max-width: 50px;
    max-height: 50px;
  }
`;

const CardHeader = styled.h3`
  color: #000;
  font-weight: 600;
`;

const CardAbout = styled.p`
  color: #000;
  width: 100%;
  line-height: 1.8;
  text-align: left;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    text-align: center;
  }
`;

function Features({ featuresData, error, lodaing }) {
  return (
    <FeaturesContainer>
      <ContentContainer>
        <Span>AWESOME FEATURES</Span>
        <Marginer direction="vertical" margin={10} />
        <Title>Cool Features</Title>
        <Marginer direction="vertical" margin={15} />
        <About>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </About>
      </ContentContainer>
      <Marginer direction="vertical" margin={50} />
      <ItemsContainer>
        {lodaing ? (
          <ErrorText>Lodaing...</ErrorText>
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : (
          featuresData.map((item, index) => (
            <FeatureContainer key={index}>
              <ImageContainer>
                <img src={item.image} alt={item.header} />
              </ImageContainer>
              <Marginer direction="vertical" margin={30} />
              <CardHeader>{item.header}</CardHeader>
              <CardAbout>{item.title}</CardAbout>
            </FeatureContainer>
          ))
        )}
      </ItemsContainer>
    </FeaturesContainer>
  );
}

export default Features;
