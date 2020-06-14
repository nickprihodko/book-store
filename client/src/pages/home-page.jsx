import React from "react";
import styled from "styled-components";

import ASideContainer from "../components/ASideContainer";
import Content from "../components/Content";

const HomePage = () => {
  return (
    <Main className="main wrapper">
      <Headline>List of books</Headline>
      <Container>
        <ASideContainer />
        <Content />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  width: 1160px;
`;

const Headline = styled.h1`
  padding: 20px 0 30px;

  font-size: 47px;
  line-height: 48px;
  color: #1a237e;
`;

const Container = styled.div`
  display: flex;
`;

export default HomePage;
