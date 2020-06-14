import React from "react";
import styled from "styled-components";

import bookCover from "../../assets/img/garry.jpg";

const BookListItem = ({ children }) => {
  return (
    <Item>
      <a href="">
        <Image src={bookCover} alt="" width="165" height="185" />
        <Info>
          <Title>{children}</Title>
          <Author>Joanne Rowling</Author>
        </Info>
      </a>
      <Price>10.25$</Price>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  margin-botom: 10px;
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
