import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../Containers/PageContainer";
import ImageOne from "../../images/logo-adobe.png";
import ImageTwo from "../../images/logo-google.png";
import ImgaeThree from "../../images/logo-paypal.png";
import ImageFour from "../../images/logo-puma.png";

const ClientsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  width: 300px;
  /* height: 100px; */
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

function Client({ isMobile }) {
  return (
    <InnerPageContainer maxWidth={!isMobile && "75%"}>
      <ClientsContainer>
        <ImageContainer>
          <img src={ImageOne} alt="logo" />
        </ImageContainer>
        <ImageContainer>
          <img src={ImageTwo} alt="logo" />
        </ImageContainer>
        <ImageContainer>
          <img src={ImgaeThree} alt="logo" />
        </ImageContainer>
        <ImageContainer>
          <img src={ImageFour} alt="logo" />
        </ImageContainer>
      </ClientsContainer>
    </InnerPageContainer>
  );
}

export default Client;
