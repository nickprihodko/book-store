import React, { Component } from "react";
import { connect } from "react-redux";

import BookListItem from "../Book-list-item";
import withBookStoreService from "../hoc";
import Spinner from "../Spinner";

import { ACTION_TYPES } from "../../data/types";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch({ type: ACTION_TYPES.booksLoaded, payload: newBooks });
    },
    booksRequested: () => {
      dispatch({ type: ACTION_TYPES.booksRequested });
    },
  };
};

export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
