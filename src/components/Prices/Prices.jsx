import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import {
  Span,
  Title,
  Content,
  ButtonStyle,
} from "../../Containers/FeaturesContainer";
import Marginer from "../../Containers/Marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SpanDate = styled(Span)`
  font-weight: normal;
  color: #000;
  font-size: 14px;
  text-transform: unset;
`;
const OnOff = styled.span`
  width: 50px;
  height: 33px;
  background-color: #ff6363;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Circle = styled.span`
  background-color: #fff;
  height: 100%;
  width: 60%;
  border-radius: 50%;
  border: 0.5px solid #ff6363;
  transform: translate(${({ isOn }) => (isOn ? "70% , 0" : "0% , 0")});
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
const StyleButton = styled(Button)`
  font-size: 11px;
  font-weight: 700;
  cursor: unset;
`;

const PricesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const Box = styled.div`
  display: flex;
  padding: 70px 0;
  border-radius: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 100%;
  &:nth-of-type(2) {
    background-color: #fff;
    margin: 0 8px;
  }
`;
const Line = styled.div`
  width: 80%;
  height: 0.5px;
  background-color: rgba(115, 114, 114, 0.2);
`;
const StyleContent = styled(Content)`
  color: rgba(115, 114, 114, 0.5);
  text-align: center;
  line-height: 1.5;
`;
const PriceBox = styled.div`
  width: auto;
  height: 50px;
  overflow: hidden;
`;
const MoveBox = styled.div`
  max-width: 100%;
  max-height: 100%;
  transform: translate(${({ isOn }) => (isOn ? "0px , 5px" : "0px , -45px")});
  transition: all 0.5s ease-in-out;
`;
const MoveText = styled.h2`
  color: #ff6363;
  font-size: 1.5em;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #000;
  margin-left: 20px;
  margin-bottom: 8px;
`;
const ContentStyle = styled.p`
  text-align: left;
  padding-left: 15px;
`;

function Prices({ priceData, lodaing, error }) {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <PriceContainer>
      <Span>PRICING FOR EVERYONE</Span>
      <Title>Our Pricing</Title>
      <Marginer direction="vertical" margin={15} />
      <DateContainer>
        <SpanDate>Monthly</SpanDate>
        <Marginer direction="horizontal" margin={10} />
        <OnOff onClick={handleClick}>
          <Circle isOn={isOn}></Circle>
        </OnOff>
        <Marginer direction="horizontal" margin={10} />
        <SpanDate>Yearly</SpanDate>
        <Marginer direction="horizontal" margin={10} />
        <StyleButton padding="3px 5px ">Save 25%</StyleButton>
        <Marginer direction="horizontal" margin={10} />
      </DateContainer>
      <Marginer direction="vertical" margin={35} />

      <PricesBox>
        {priceData.map((item, index) => (
          <Box key={index}>
            <Title>{item.priceType}</Title>
            <Marginer direction="vertical" margin={25} />
            <StyleContent>{item.title}</StyleContent>
            <Marginer direction="vertical" margin={25} />
            <Line></Line>
            <Marginer direction="vertical" margin={25} />
            <PriceBox>
              <MoveBox isOn={isOn}>
                <MoveText>${item.priceOne}</MoveText>
                <Marginer direction="vertical" margin={25} />
                <MoveText>${item.priceTwo}</MoveText>
              </MoveBox>
            </PriceBox>
            <DateContainer>
              <Span>per</Span>
              <Marginer direction="horizontal" margin={10} />
              <PriceBox>
                <MoveBox isOn={isOn}>
                  <MoveText>Month</MoveText>
                  <Marginer direction="vertical" margin={23} />
                  <MoveText>Year</MoveText>
                </MoveBox>
              </PriceBox>
            </DateContainer>
            <Marginer direction="vertical" margin={25} />
            <DateContainer>
              <Icon icon={faCheckCircle} />
              <ContentStyle icon={<Icon icon={faCheckCircle} />}>
                {item.about}
              </ContentStyle>
            </DateContainer>
            <Marginer direction="vertical" margin={25} />

            <DateContainer>
              <Icon icon={faCheckCircle} />
              <ContentStyle icon={<Icon icon={faCheckCircle} />}>
                {item.about}
              </ContentStyle>
            </DateContainer>
            <Marginer direction="vertical" margin={25} />

            <ButtonStyle padding="13px 25px 13px">Get Started</ButtonStyle>
          </Box>
        ))}
      </PricesBox>
    </PriceContainer>
  );
}

export default Prices;
