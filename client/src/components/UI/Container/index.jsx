import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 300px;
`;

export default Container;
