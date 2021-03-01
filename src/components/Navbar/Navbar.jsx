import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InnerPageContainer } from "../../Containers/PageContainer";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.div`
  width: 100%;
  /* height: 60px; */
  padding: 20px;
  color: #fff;
  background-color: #202040;
`;
const NavbarWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BrandLogo = styled(Link)`
  height: 100%;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  font-size: 25px;
  text-decoration: none;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListElement = styled.li`
  padding: 0 10px 0;
  display: inline-block;
  cursor: pointer;
  transition: color 0.5s ease-in-out;
  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.5s ease-in-out;

    &:hover {
      color: #eb4f4f;
    }
  }
  &:hover {
    color: #eb4f4f;
  }
`;
const ButtonStyle = styled(Button)`
  background-color: transparent;
  border-radius: 20px;
  border: 0.1px solid rgba(235, 79, 79, 0.423);
`;
const OpenIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 50px;
  font-size: 35px;
  display: ${({ open }) => (open ? "none" : "unset")};
  cursor: pointer;
`;

function Navbar({ handleOpen, isOpen, isMobile, isTablet }) {
  return (
    <NavbarContainer>
      <InnerPageContainer maxWidth={!isMobile && "75%"}>
        <NavbarWrapper>
          {isMobile ? (
            <OpenIcon icon={faBars} onClick={handleOpen} open={isOpen} />
          ) : null}
          <BrandLogo to="/">Easy</BrandLogo>
          {isMobile ? null : (
            <List>
              <ListElement>
                <Link to="/">Home</Link>
              </ListElement>
              <ListElement>Dropdown</ListElement>
              <ListElement>
                <Link to="/inner-page">InnerPage</Link>
              </ListElement>
              <ListElement>
                <Link to="/contact-us">Contact Us</Link>
              </ListElement>
            </List>
          )}
          {!isMobile && !isTablet && (
            <ButtonStyle width="8rem" height="40px">
              Get Started
            </ButtonStyle>
          )}
        </NavbarWrapper>
      </InnerPageContainer>
    </NavbarContainer>
  );
}

export default Navbar;
