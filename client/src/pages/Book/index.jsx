import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadBook } from "../../actions/books";
import { createPost } from "../../actions/post";

import AddPost from "./components/AddPost";
import Posts from "./components/Posts";

import BookCover from "../../assets/img/garry.jpg";

const BookPage = ({ loading, book, loadBook, createPost }) => {
  const { id } = useParams();

  const { title, author, rate, price, description, fragment } = book;

  useEffect(() => {
    loadBook(id);
  }, []);

  const onSubmit = (data) => {
    const newPost = {
      post: data,
      bookid: id,
    };

    createPost(newPost);
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
          <RateView>
            <span>RATE</span>
            <span>{rate}</span>
          </RateView>
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </RateContainer>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookDesc>{description}</BookDesc>
        <BookPrice>{price} $</BookPrice>
      </BookInfo>
      <BookFragment>{fragment}</BookFragment>

      <AddPost onSubmit={onSubmit}></AddPost>
      <Posts bookId={+id}></Posts>
    </BookSection>
  );
};

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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const RateView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  font-family: "Oxygen Bold";
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #ffd740;

  background-color: #7986cb;
  border: 2px solid #ffd740;
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

const mapStateToProps = ({ book }) => ({
  loading: book.loading,
  book: book.book,
});

BookPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  book: PropTypes.object.isRequired,
  loadBook: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadBook, createPost })(BookPage);
