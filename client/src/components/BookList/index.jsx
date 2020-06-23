import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { booksLoaded } from "../../actions/books";

import BookListItem from "../BookListItem";

const BookList = ({ queryParams, books, favorites, booksLoaded }) => {
  useEffect(() => {
    booksLoaded(queryParams);
  }, [booksLoaded, queryParams]);

  return (
    <List>
      {books.map((book) => {
        return (
          <BookListItem
            key={book.id}
            book={book}
            isFavorite={
              favorites.filter((item) => item.bookId === book.id).length
            }
          ></BookListItem>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

BookList.propTypes = {
  queryParams: PropTypes.string,
  books: PropTypes.array,
  booksLoaded: PropTypes.func,
  favorites: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  books: books.data,
  favorites: books.favorites,
});

export default connect(mapStateToProps, { booksLoaded })(BookList);
