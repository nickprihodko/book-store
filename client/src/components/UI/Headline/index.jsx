import React from "react";
import styled from "styled-components";

const Headline = ({ as, children }) => {
  return <StyledHeader as={as}>{children}</StyledHeader>;
};

const StyledHeader = styled.h1`
  margin: 30px 0 20px;

  font-family: "Oxygen Bold";
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #1a237e;
`;

export default Headline;
