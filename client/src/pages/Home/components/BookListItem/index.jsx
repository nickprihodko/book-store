import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import bookCover from "../../../../assets/img/garry.jpg";

const BookListItem = ({ book }) => {
  const { id, title, author, price, rate } = book;

  return (
    <Item>
      <Rating>{rate}</Rating>
      <BookLink to={`/book/${id}`}>
        <Image src={bookCover} alt="" width="165" height="185" />
        <Info>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </Info>
      </BookLink>
      <Price>{price} $</Price>
    </Item>
  );
};

const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 20px;
  width: 230px;
  height: 360px;
  box-sizing: border-box;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const BookLink = styled(Link)`
  flex-grow: 1;
`;

const Rating = styled.span`
  position: absolute;
  top: 25px;
  left: 25px;

  display: block;
  width: 30px;
  height: 30px;

  font-family: "Oxygen Bold";
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  color: #ffd740;

  background-color: #7986cb;
  border-radius: 50%;
`;

const Image = styled.img`
  margin-bottom: 10px;
`;

const Info = styled.h3`
  margin-bottom: 10px;
  padding-left: 5px;
  width: 205px;
`;

const Title = styled.span`
  display: block;

  font-size: 22px;
  color: #000000;
`;

const Author = styled.span`
  display: block;

  font-size: 14px;
  color: #000000;
`;

const Price = styled.span`
  margin-top: auto;
  padding-left: 5px;

  font-family: "Oxygen Bold";
  font-size: 20px;
`;

export default BookListItem;
