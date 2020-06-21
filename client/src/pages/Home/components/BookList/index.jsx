import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { booksLoaded } from "../../../../actions/books";

import BookListItem from "../BookListItem";

const BookList = ({ queryParams, books, booksLoaded }) => {
  useEffect(() => {
    booksLoaded(queryParams);
  }, [booksLoaded, queryParams]);

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
  justify-content: space-between;
`;

BookList.propTypes = {
  queryParams: PropTypes.string,
  books: PropTypes.array,
  booksLoaded: PropTypes.func,
};

const mapStateToProps = ({ books }) => ({
  books: books.data,
});

export default connect(mapStateToProps, { booksLoaded })(BookList);
