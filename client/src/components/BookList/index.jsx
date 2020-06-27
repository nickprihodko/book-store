import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BookListItem from "../BookListItem";

const BookList = ({ books }) => {
  return (
    <List>
      {books.map((book) => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

BookList.propTypes = {
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
};

export default BookList;
