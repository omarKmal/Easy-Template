import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../Containers/PageContainer";
import Marginer from "../../Containers/Marginer";
import HeroImage from "../../images/hero_img.png";
import { Button } from "../Button/Button";
import { deviceSize } from "../../Containers/resposive";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 100px 0 100px;
  /* height: 700px; */
  background-color: #202040;
  /* clip-path: ellipse(1102px 400px at 37% 6%); */
`;
const HeroContainerWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  display: flex;
  width: 50%;
  margin-right: 150px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    margin: 0;
    margin-bottom: 50px;
    width: 100%;
    align-items: center;
  }
`;
const Title = styled.h1`
  color: #fff;
  font-size: 2.5em;
`;
const Pargraph = styled.p`
  color: #fff;
  line-height: 1.8;
  width: 95%;
`;
const InputContainer = styled.div`
  position: relative;
  width: 90%;
  height: 70px;
  border-radius: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  outline: none;
  position: absolute;
  padding-left: 7%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1.2em;
  }
`;
const ButtonStyled = styled(Button)`
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translate(-50%, -50%);
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
    margin-top: 50px;
  }
`;

function HeroSection({ isMobile, isTablet, isDesktop, isLaptop }) {
  return (
    <HeroContainer>
      <InnerPageContainer maxWidth={!isMobile && "75%"}>
        <HeroContainerWrapper isTablet={isTablet}>
          <Content>
            <Title>
              Get Paid Easily
              <br />
              without Hassle
            </Title>
            <Marginer direction="vertical" margin={20} />
            <Pargraph>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live.
            </Pargraph>
            <Marginer direction="vertical" margin={20} />
            <InputContainer>
              <Input placeholder="Enter email address" type="text" />
              <ButtonStyled height="3em" width="8em">
                Sign Up
              </ButtonStyled>
            </InputContainer>
          </Content>
          {!isMobile && (
            <ImgContainer>
              <img src={HeroImage} alt="hero-img" />
            </ImgContainer>
          )}
        </HeroContainerWrapper>
      </InnerPageContainer>
    </HeroContainer>
  );
}

export default HeroSection;
