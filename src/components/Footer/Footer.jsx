import react from "react";
import styled from "styled-components";
import { deviceSize } from "../../Containers/resposive";
import Marginer from "../../Containers/Marginer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faRedditAlien,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const FooterContainer = styled.div`
  padding-left: 0;
  /* padding: 50px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 150px;
  margin-bottom: 150px;
  width: 100%;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
  }
`;
const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h3`
  color: #000;
`;
const About = styled.p`
  color: #000;
  font-size: 13px;
  width: 80%;
  line-height: 1.8;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    text-align: center;
  }
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  /* flex: 1; */
  @media screen and (max-width: ${deviceSize.tablet}px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    color: #ff6363;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  transition: all 0.4s ease-in-out;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-height: 220px;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    margin-top: 20px;
    width: 100%;
    max-width: 90%;
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  margin-right: 130px;
  color: #000;
  font-size: 15px;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    margin-right: 20px;
  }
`;
const Me = styled.p`
  color: #555;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  width: 100%;
  background-color: rgba(85, 85, 85, 0.099);
  padding: 10px;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <LeftSide>
          <Title>About</Title>
          <Marginer direction="vertical" margin={20} />
          <About>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live.
          </About>
          <Marginer direction="vertical" margin={20} />
          <Title>Connect with us</Title>
          <Marginer direction="vertical" margin={40} />
          <Icons>
            <IconContainer>
              <Icon icon={faFacebookF} />
            </IconContainer>
            <IconContainer>
              <Icon icon={faTwitter} />
            </IconContainer>
            <IconContainer>
              <Icon icon={faInstagram} />
            </IconContainer>
            <IconContainer>
              <Icon icon={faRedditAlien} />
            </IconContainer>
            <IconContainer>
              <Icon icon={faLinkedinIn} />
            </IconContainer>
          </Icons>
        </LeftSide>
        <RightSide>
          <Title>Navigations</Title>
          <Marginer direction="vertical" margin={20} />

          <LinksContainer>
            <Links to="/">Home</Links>
            <Links to="/services">Services</Links>
            <Links to="/Work">Work</Links>
            <Links to="/">Contact</Links>
            <Links to="/">Process</Links>
            <Links to="/">About Us</Links>
            <Links to="/">Privacy</Links>
            <Links to="/">FAQ</Links>
            <Links to="/">Careers</Links>
            <Links to="/">Process</Links>
            <Links to="/">About Us</Links>
            <Links to="/">Press</Links>
            <Links to="/">Support</Links>
            <Links to="/">Privacy</Links>
            <Links to="/">Home</Links>
          </LinksContainer>
          {/* <Marginer direction="vertical" margin={17} /> */}
        </RightSide>
      </FooterContainer>
      <Me>Created by Omar Kamal</Me>
    </>
  );
}
export default Footer;
