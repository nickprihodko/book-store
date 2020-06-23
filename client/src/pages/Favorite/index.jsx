import React from "react";
import styled from "styled-components";

import BookList from "../../components/BookList";
import Headline from "../../components/UI/Headline";

const FavoritesPage = ({ location }) => {
  return (
    <Main>
      <h1 className="visually-hidden">Favorite Page</h1>
      <ContentContainer>
        <Headline title="Favorites" as="h2" />
        <BookList location={location} />
      </ContentContainer>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  margin: 0 auto;

  padding: 0 20px;
  width: 940px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default FavoritesPage;
