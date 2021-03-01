import styled from "styled-components";
export const Button = styled.button`
  outline: none;
  border: 1px solid #ff6363;
  background-color: #ff6363;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${({ padding }) => (padding ? ` ${padding} ` : "5px 10px 5px")};
  width: ${({ width }) => (width ? width : "unset")};
  height: ${({ height }) => (height ? height : "unset")};
  transition: background-color 0.5s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #eb4f4f;
  }
`;
