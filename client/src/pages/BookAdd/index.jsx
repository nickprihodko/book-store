import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addBook } from "actions/books";

import Container from "components/UI/Container";
import Headline from "components/UI/Headline";
import Paragraph from "components/UI/Paragraph";
import BookForm from "./components/BookForm";

const BookAdd = ({ addBook }) => {
  const onBookSubmit = (data) => {
    addBook(data);
  };

  return (
    <main>
      <h1 className="visually-hidden">Add book page</h1>
      <Container>
        <Headline as="h2">Add book</Headline>
        <Paragraph>Add Your new book</Paragraph>
        <BookForm onSubmit={onBookSubmit} />
      </Container>
    </main>
  );
};

BookAdd.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BookAdd);
