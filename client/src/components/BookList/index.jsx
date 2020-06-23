import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { booksLoaded, loadUserFavoritesBooks } from "../../actions/books";

import BookListItem from "../BookListItem";

const BookList = ({ location, books, booksLoaded, loadUserFavoritesBooks }) => {
  useEffect(() => {
    if (location.pathname === "/favorites") {
      loadUserFavoritesBooks();
    } else {
      booksLoaded(location.search);
    }
  }, [booksLoaded, location.search]);

  return (
    <List>
      {books.map((book) => {
        return <BookListItem key={book.id} book={book}></BookListItem>;
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

BookList.propTypes = {
  location: PropTypes.object,
  books: PropTypes.array,
  booksLoaded: PropTypes.func,
  loadUserFavoritesBooks: PropTypes.func,
};

const mapStateToProps = ({ books }) => ({
  books: books.data,
});

export default connect(mapStateToProps, {
  booksLoaded,
  loadUserFavoritesBooks,
})(BookList);
