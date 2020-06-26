import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadUserFavoritesBooks } from "../../actions/books";

import BookList from "../../components/BookList";
import Headline from "../../components/UI/Headline";

const FavoritesPage = ({ books, loadUserFavoritesBooks }) => {
  useEffect(() => {
    loadUserFavoritesBooks();
  }, []);

  return (
    <Main>
      <h1 className="visually-hidden">Favorite Page</h1>
      <ContentContainer>
        <Headline title="Favorites" as="h2" />
        <BookList books={books} />
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

// fix div -> section
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// fix propTypes

const mapStateToProps = ({ books }) => ({
  books: books.data,
});

export default connect(mapStateToProps, { loadUserFavoritesBooks })(
  FavoritesPage
);
