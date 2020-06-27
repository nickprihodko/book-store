import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadUserFavoritesBooks } from "../../actions/books";

import BookList from "../../components/BookList";
import Headline from "../../components/UI/Headline";

const FavoritesPage = ({ books, loadUserFavoritesBooks }) => {
  useEffect(() => {
    loadUserFavoritesBooks();
  }, [loadUserFavoritesBooks]);

  return (
    <Main>
      <h1 className="visually-hidden">Favorite Page</h1>
      <ContentContainer>
        <Headline as="h2">Favorites</Headline>
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

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

FavoritesPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      price: PropTypes.number,
      rate: PropTypes.number,
      cover: PropTypes.string,
    })
  ).isRequired,
  loadUserFavoritesBooks: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books }) => ({
  books: books.data,
});

export default connect(mapStateToProps, { loadUserFavoritesBooks })(
  FavoritesPage
);
