import React from "react";
import styled from "styled-components";

import SortFilter from "../../components/SortFilter";
import BookList from "../../components/BookList";

const FavoritesPage = () => {
  return (
    <Main>
      <h1 className="visually-hidden">Favorite Page</h1>
      <ContentContainer>
        <SortFilter />
        <BookList queryParams={""} />
      </ContentContainer>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  margin: 10px auto;

  padding: 0 20px;
  width: 1160px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FavoritesPage;
