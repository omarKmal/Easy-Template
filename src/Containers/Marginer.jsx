import React from "react";
import styled from "styled-components";

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer({ direction, margin }) {
  if (direction === "horizontal") {
    return <HorizontalMargin direction={direction} margin={margin} />;
  } else {
    return <VerticalMargin direction={direction} margin={margin} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export default Marginer;
