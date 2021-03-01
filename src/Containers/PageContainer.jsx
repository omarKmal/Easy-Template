import React from "react";
import styled from "styled-components";

const PageWarpper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

function PageContainer({ children }) {
  return <PageWarpper>{children}</PageWarpper>;
}

export default PageContainer;

export const InnerPageContainer = styled.div`
  /* flex: 1; */
  height: 100%;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  margin: auto;
  padding-right: 15px;
  padding-left: 15px;
`;
