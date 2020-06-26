import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BookListItem from "../BookListItem";

const BookList = ({ books }) => {
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
  books: PropTypes.array, // fix
};

export default BookList;
