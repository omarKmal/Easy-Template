import React from "react";
import cashImage from "../../images/undraw_wallet_aym5.svg";
import {
  ContentContainer,
  Span,
  Title,
  Content,
  ButtonStyle,
  PaymentContainer,
  ImageContainer,
  Image,
} from "../../Containers/FeaturesContainer";
import Marginer from "../../Containers/Marginer";

function Cash() {
  return (
    <PaymentContainer>
      <ImageContainer>
        <Image>
          <img src={cashImage} alt="cash-img" />
        </Image>
      </ImageContainer>
      <ContentContainer>
        <Span>LIFE CHANGING APP</Span>
        <Title>Far far away, behind the word mountains</Title>
        <Marginer direction="vertical" margin={25} />
        <Content>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live.
        </Content>
        <Marginer direction="vertical" margin={25} />

        <ButtonStyle padding="13px 25px 13px">Get Started</ButtonStyle>
      </ContentContainer>
    </PaymentContainer>
  );
}

export default Cash;
