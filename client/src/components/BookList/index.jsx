import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { booksLoaded } from "../../actions/books";

import BookListItem from "../BookListItem";

const BookList = ({ books, booksLoaded }) => {
  useEffect(() => {
    booksLoaded();
  }, []);

  return (
    <List>
      {books.map((book) => {
        return <BookListItem key={book.id}>{book.title}</BookListItem>;
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
});

export default connect(mapStateToProps, { booksLoaded })(BookList);
