import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadBook, setRating } from "../../actions/books";
import { createReview } from "../../actions/reviews";

import AddReview from "./components/AddReview";
import Reviews from "./components/Reviews";

import BookCover from "../../assets/img/garry.jpg";

const BookPage = ({
  loading,
  book,
  loadBook,
  createReview,
  isAuthenticated,
  setRating,
}) => {
  const { id } = useParams();

  const { title, author, rate, price, description, fragment } = book;

  useEffect(() => {
    loadBook(id);
  }, [loadBook, id]);

  const onSubmit = (data) => {
    const newReview = {
      review: data,
      bookid: id,
    };

    createReview(newReview);
  };

  const handleRating = (rate) => {
    const data = {
      rate,
      bookId: id,
    };

    setRating(data);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <BookSection>
      <h2 className="visually-hidden">Карточка книги</h2>
      <ImageList>
        <ImageItem>
          <img src={BookCover} alt="" width="460" height="500" />
        </ImageItem>
        <ImageItem>
          <img src={BookCover} alt="" width="140" height="149" />
        </ImageItem>
        <ImageItem>
          <img src={BookCover} alt="" width="140" height="149" />
        </ImageItem>
        <ImageItem>
          <img src={BookCover} alt="" width="140" height="149" />
        </ImageItem>
      </ImageList>
      <BookInfo>
        <RateContainer>
          <RateView title="book rating">{rate}</RateView>
          {isAuthenticated ? (
            <StyledRating
              size={30}
              onChange={(newRating) => {
                handleRating(newRating);
              }}
            />
          ) : null}
        </RateContainer>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookDesc>{description}</BookDesc>
        <BookPrice>{price} $</BookPrice>
      </BookInfo>
      <BookFragment>{fragment}</BookFragment>

      {isAuthenticated ? <AddReview onSubmit={onSubmit}></AddReview> : null}
      <Reviews bookId={+id}></Reviews>
    </BookSection>
  );
};

const StyledRating = styled(Rating)`
  outline: none;
`;

const BookSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 960px;
`;

const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

const ImageItem = styled.li`
  margin: 0 20px 20px 0;

  &:first-child,
  &:last-child {
    margin-right: 0;
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RateView = styled.div`
  margin-right: 10px;
  padding: 10px;
  width: 20px;
  height: 20px;

  font-family: "Oxygen Bold";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffd740;

  background-color: #1a237e;

  border: 1px solid #ffffff;
  border-radius: 4px;
`;

const BookTitle = styled.span`
  margin-bottom: 10px;
  padding-right: 20px;

  font-family: "Oxygen Bold";
  font-size: 24px;
`;

const BookAuthor = styled.span`
  margin-bottom: 10px;

  font-family: "Oxygen Bold";
  font-size: 18px;
`;

const BookDesc = styled.span`
  margin-bottom: 20px;

  text-indent: 10px;
`;

const BookPrice = styled.span`
  font-family: "Oxygen Bold";
`;

const BookFragment = styled.div`
  margin-bottom: 20px;
  width: 100%;

  text-indent: 10px;
`;

BookPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  book: PropTypes.object.isRequired,
  loadBook: PropTypes.func.isRequired,
  createReview: PropTypes.func.isRequired,
  setRating: PropTypes.func,
};

const mapStateToProps = ({ book, auth }) => ({
  loading: book.loading,
  book: book.book,
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadBook, createReview, setRating })(
  BookPage
);
