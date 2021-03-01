import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const DropDownContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? "50%" : "50%")};
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: all 1s ease-in-out;
  align-items: flex-start;
  right: ${({ isOpen }) => (isOpen ? "0" : "-80%")};
  padding-top: 100px;
`;

const List = styled(Link)`
  text-decoration: none;
  color: #000;

  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.4s ease-in-out;
`;
const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: rgb(220, 70, 70);
  transition: color 0.4s ease-in-out;
  cursor: pointer;
`;

function Dropdown({ handleOpen, isMobile, isOpen }) {
  return (
    <DropDownContainer isMobile={isMobile} isOpen={isOpen}>
      <CloseIcon icon={faTimesCircle} onClick={handleOpen} />
      <List to="/menu-one">Menu One</List>
      <List to="/menu-two">Menu Two</List>
      <List to="/menu-three">Menu Three</List>
      <List to="/menu-four">Menu Four</List>
      <List to="/menu-five">Menu Five</List>
    </DropDownContainer>
  );
}

export default Dropdown;
