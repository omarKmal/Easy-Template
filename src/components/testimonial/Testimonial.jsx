import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Marginer from "../../Containers/Marginer";
import { deviceSize } from "../../Containers/resposive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContentContainer,
  Span,
  Title,
  Content,
  ButtonStyle,
  ErrorText,
} from "../../Containers/FeaturesContainer";
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const TestemonialContainer = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  justify-content: space-between;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
    height: 700px;
  }
`;

const SlideContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: hidden;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 320px;
  }
`;

const Slides = styled.div`
  width: calc(600px * 3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(${({ move }) => (move ? `-${move}px` : "0px")}, 0px);
  transition: all 0.7s ease-in-out;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: calc(320px * 3);
  }
`;

const SlideBox = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 15px 30px 0 rgb(0 0 0 / 5%);

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 320px;
    height: auto;
  }
`;

const PersonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 40px 15px;
`;
const ImageContainer = styled.div`
  width: 80px;
  height: 80px;

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%;
  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 20px;
`;
const Name = styled.h4`
  color: #000;
  font-weight: 600;
`;
const Job = styled.span`
  color: #907777;
`;
const About = styled.p`
  padding-left: 40px;
  font-size: 17px;
  width: 90%;
  color: #000;
  font-weight: 700;
  line-height: 1.7;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 40px;
`;
const buttonstyle = css`
  color: #000;
  background-color: transparent;
  padding: 8px 12px;
  cursor: pointer;
  margin-right: 8px;
  box-shadow: 0 15px 30px 0 rgb(0 0 0 / 5%);
  border: 1px solid rgba(218, 213, 213, 0.375);
  outline: none;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 1px solid#4c4a4a;
  }
  &:foucs {
    outline: none;
  }
`;
const NextButton = styled.button`
  ${buttonstyle}
`;
const PrevButton = styled.button`
  ${buttonstyle}
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

function Testimonial({ sliderData, isMobile, isTablet, lodaing, error }) {
  const [move, setMove] = useState(0);

  const handleNext = () => {
    setMove(
      move === (isMobile || isTablet ? 320 : 600) * (sliderData.length - 1)
        ? move - (sliderData.length - 1) * (isMobile || isTablet ? 320 : 600)
        : move + (isMobile || isTablet ? 320 : 600)
    );
  };

  const handlePrev = () => {
    setMove(
      move === 0
        ? move + (sliderData.length - 1) * (isMobile || isTablet ? 320 : 600)
        : move - (isMobile || isTablet ? 320 : 600)
    );
  };

  // setTimeout(() => {
  //   handleNext();
  // }, 3000);

  return (
    <TestemonialContainer>
      <ContentContainer>
        <Span>Join Now</Span>
        <Title>Join More Than 90,000+ Amazing People Loves Our Product</Title>
        <Marginer direction="vertical" margin={25} />
        <Content>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Content>
        <Marginer direction="vertical" margin={25} />
        <ButtonStyle padding="13px 25px 13px">Product Tour</ButtonStyle>
      </ContentContainer>
      <SlideContainer>
        {lodaing ? (
          <ErrorText>Lodaing...</ErrorText>
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : (
          <Slides move={move}>
            {sliderData.map((slide, index) => (
              <SlideBox key={index}>
                <PersonContainer>
                  <ImageContainer>
                    <img src={slide.image} alt={slide.title} />
                  </ImageContainer>
                  <NameContainer>
                    <Name>{slide.name}</Name>
                    <Job>{slide.title}</Job>
                  </NameContainer>
                </PersonContainer>
                <About>{slide.content}</About>
                <ButtonContainer>
                  <PrevButton onClick={handlePrev}>
                    <Icon icon={faLongArrowAltLeft} />
                  </PrevButton>
                  <NextButton onClick={handleNext}>
                    <Icon icon={faLongArrowAltRight} />
                  </NextButton>
                </ButtonContainer>
              </SlideBox>
            ))}
          </Slides>
        )}
      </SlideContainer>
    </TestemonialContainer>
  );
}

export default Testimonial;
