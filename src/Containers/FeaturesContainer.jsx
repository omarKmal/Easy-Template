import styled from "styled-components";
import { Button } from "../components/Button/Button";
import { deviceSize } from "../Containers/resposive";
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  height: 400px;
  margin-bottom: 50px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const Span = styled.span`
  color: #ff6363;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const Title = styled.h4`
  color: #000;
  font-weight: 600;
  font-size: 27px;
  /* width: 70%; */
  @media screen and (max-width: ${deviceSize.mobile}px) {
    text-align: center;
  }
`;

const Content = styled.p`
  color: #000;
  /* width: 70%; */
  line-height: 1.8;
  text-align: left;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    text-align: center;
  }
`;
const ButtonStyle = styled(Button)`
  border-radius: 25px;
`;

const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    height: 350px;
  }
`;
const Image = styled.div`
  width: 90%;
  height: 90%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const ErrorText = styled.h2`
  color: #5a5656;
  font-size: 2em;
  font-weight: 700;
`;
export {
  ContentContainer,
  Span,
  Title,
  Content,
  ButtonStyle,
  PaymentContainer,
  ImageContainer,
  Image,
  ErrorText,
};
