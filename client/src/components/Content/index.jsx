import React from "react";
import styled from "styled-components";

import BookList from "../BookList";

const Content = () => {
  return (
    <section>
      <Headline>
        <Sort>Sort</Sort>
        <StyledLink href="#">by PRICE</StyledLink>
        <StyledLink href="#">by Rate</StyledLink>
        <StyledLink href="#">by TITLE</StyledLink>
      </Headline>
      <BookList></BookList>
    </section>
  );
};

const Headline = styled.header`
  display: flex;
  margin-bottom: 20px;
`;

const Sort = styled.span`
  margin-right: 20px;

  font-family: "Oxygen Bold";
  text-transform: uppercase;
  color: #1a237e;
`;

const StyledLink = styled.a`
  margin-right: 20px;
`;

export default Content;
