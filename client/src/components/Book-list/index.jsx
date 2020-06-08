import React, { Component } from "react";
import { connect } from "react-redux";

// import BookListItem from "../Book-list-item";
import withBookStoreService from "../hoc";
import Spinner from "../Spinner";
import ErrorIndicator from "../Error-indicator";

import { ACTION_TYPES } from "../../actions/types";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError,
    } = this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul>
        {/* {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })} */}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
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
    booksError: (error) => {
      dispatch({ type: ACTION_TYPES.booksError, payload: error });
    },
  };
};

export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
