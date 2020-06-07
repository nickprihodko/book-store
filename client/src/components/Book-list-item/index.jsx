import React from "react";
import styled from "styled-components";

const BookListItemContainer = styled.div`
  border: 2px solid #4a148c;
`;

const BookListItemHeader = styled.h3`
  color: #4a148c;
`;

const BookListItem = ({ book }) => {
  const { title, author, price } = book;

  return (
    <BookListItemContainer>
      <img src="" alt="Изображение книги" width="200" height="300" />
      <BookListItemHeader>{title}</BookListItemHeader>
      <span>{author}</span>
      <span>{price}</span>
    </BookListItemContainer>
  );
};

export default BookListItem;
