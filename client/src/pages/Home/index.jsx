import React from "react";
import styled from "styled-components";

import ASide from "./components/ASide";
import SortFilter from "./components/SortFilter";
import BookList from "./components/BookList";

const HomePage = () => {
  // const id= this.props.match.params.id;

  return (
    <Main>
      <Container>
        <ASide />
        <ContentContainer>
          <SortFilter />
          <BookList />
        </ContentContainer>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  width: 1160px;
`;

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomePage;
