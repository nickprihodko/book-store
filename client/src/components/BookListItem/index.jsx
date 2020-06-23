import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { setFavorite } from "../../actions/books";

import bookCover from "../../assets/img/garry.jpg";

const BookListItem = ({ book, isAuthenticated, favorites, setFavorite }) => {
  const { id, title, author, price, rate } = book;

  const [loading, setLoading] = useState(false);
  const isFavorite = favorites.includes(book.id);

  const heartClick = () => {
    if (!loading) {
      setLoading(true);

      const data = {
        isFavorite: !isFavorite,
        bookId: id,
      };

      setFavorite(data).then(() => setLoading(false));
    }
  };

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
      <Div>
        <Price>{price} $</Price>

        {isAuthenticated ? (
          <Heart
            isFavorite={isFavorite}
            onClick={heartClick}
            viewBox="0 0 32 29.6"
          >
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </Heart>
        ) : null}
      </Div>
    </Item>
  );
};

const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 20px;
  width: 220px;
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

  text-align: center;
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

  text-align: left;
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

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  margin-top: auto;
  padding-left: 5px;

  font-family: "Oxygen Bold";
  font-size: 20px;
`;

const Heart = styled.svg`
  padding-right: 10px;
  width: 15px;

  fill: lightgray;
  cursor: pointer;

  ${({ isFavorite }) => (isFavorite ? `fill: red;` : `fill: gray`)}
`;

BookListItem.defaultProps = {
  isAuthenticated: false,
};

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  favorites: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, books }) => ({
  isAuthenticated: auth.isAuthenticated,
  favorites: books.favorites,
});

export default connect(mapStateToProps, { setFavorite })(BookListItem);
