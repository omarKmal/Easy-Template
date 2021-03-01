import React from "react";
import payImage from "../../images/undraw_make_it_rain_iwk4.svg";
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

function PaymentFeature() {
  return (
    <PaymentContainer>
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
      <ImageContainer>
        <Image>
          <img src={payImage} alt="pay-image" />
        </Image>
      </ImageContainer>
    </PaymentContainer>
  );
}

export default PaymentFeature;
