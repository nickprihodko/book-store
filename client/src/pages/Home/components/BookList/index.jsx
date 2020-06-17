import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { booksLoaded } from "../../../../actions/books";

import BookListItem from "../BookListItem";

const BookList = ({ books, filter, booksLoaded }) => {
  useEffect(() => {
    booksLoaded(filter);
  }, [booksLoaded, filter]);

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
  books: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  books: books.books,
  filter: books.filter,
});

export default connect(mapStateToProps, { booksLoaded })(BookList);
