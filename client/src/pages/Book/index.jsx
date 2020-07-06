import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadBook, setRating, addBookCover } from "actions/books";
import { createReview } from "actions/reviews";

import AddReview from "./components/AddReview";
import Reviews from "./components/Reviews";
import Modal from "components/Modal";
import SelectFile from "components/SelectFile";

import BookCover from "assets/img/book-cover.png";

const BookPage = ({
  loading,
  book,
  loadBook,
  createReview,
  isAuthenticated,
  setRating,
  addBookCover,
}) => {
  const { id } = useParams();

  useEffect(() => {
    loadBook(id);
  }, [loadBook, id]);

  const {
    title,
    author,
    rate,
    price,
    description,
    fragment,
    rates,
    cover,
  } = book;

  const [modal, setModal] = useState(false);
  const [bookCover, setBookCover] = useState(cover || "");

  let userRate = 0;
  if (rates !== undefined && rates.length > 0) {
    userRate = rates[0].userrate;
  }

  const handleRating = (rate) => {
    const data = {
      rate,
      bookId: id,
    };

    setRating(data);
  };

  const addReview = (data) => {
    const newReview = {
      review: data,
      bookid: id,
    };
    createReview(newReview);
  };

  const onModalShow = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const onModalClose = () => {
    setModal(false);
  };

  const onModalChange = (e) => {
    switch (e.target.name) {
      case "file":
        setBookCover(e.target.files[0]);
        break;

      default:
        return;
    }
  };

  const onModalSubmit = async (e) => {
    e.preventDefault();
    const data = {
      cover: bookCover,
      bookId: id,
    };
    await addBookCover(data);
    setModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BookSection>
      <h2 className="visually-hidden">Book info</h2>
      <BookImage
        src={cover || BookCover}
        alt="book cover"
        width="460"
        height="500"
      />
      {isAuthenticated && <BookImageSelect onClick={onModalShow} />}
      <BookInfo>
        <RateContainer>
          <RateView title="book rating">{rate}</RateView>
          {isAuthenticated && (
            <StyledRating
              size={30}
              value={userRate}
              onChange={(newRating) => {
                handleRating(newRating);
              }}
            />
          )}
        </RateContainer>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookDesc>{description}</BookDesc>
        <BookPrice>{price} $</BookPrice>
      </BookInfo>
      <BookFragment>{fragment}</BookFragment>

      {isAuthenticated && <AddReview onSubmit={addReview} />}
      <Reviews bookId={+id} />
      {modal && (
        <Modal>
          <SelectFile
            title="Select book cover!"
            onModalClose={onModalClose}
            onModalChange={onModalChange}
            onSubmit={onModalSubmit}
          />
        </Modal>
      )}
    </BookSection>
  );
};

const StyledRating = styled(Rating)`
  outline: none;
`;

const BookSection = styled.section`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 960px;
`;

const BookImageSelect = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

  display: block;
  width: 50px;
  height: 50px;

  background-color: transparent;
  background: url("/images/select-file.png") no-repeat center center;
  border: 2px solid #1a237e;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

const BookImage = styled.img`
  margin-right: 10px;

  &:hover {
    ${BookImageSelect} {
      display: block;
    }
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
  margin: 20px 0;
  width: 100%;

  text-indent: 10px;
`;

BookPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  book: PropTypes.object.isRequired,
  loadBook: PropTypes.func.isRequired,
  createReview: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setRating: PropTypes.func,
  addBookCover: PropTypes.func,
};

const mapStateToProps = ({ book, auth }) => ({
  loading: book.loading,
  book: book.data,
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  loadBook,
  createReview,
  setRating,
  addBookCover,
})(BookPage);
