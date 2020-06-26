import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadBooks } from "../../actions/books";

import ASide from "./components/ASideFilter";
import SortFilter from "../../components/SortFilter";
import BookList from "../../components/BookList";
import Pagination from "../../components/Pagination";

const HomePage = ({ location, loading, books, pager, loadBooks }) => {
  useEffect(() => {
    loadBooks(location.search);
  }, [loadBooks, location.search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <h1 className="visually-hidden">Main Page</h1>
      <ASide />
      <ContentContainer>
        <SortFilter />
        <BookList books={books} />
        {Object.keys(pager).length > 0 && <Pagination pager={pager} />}
      </ContentContainer>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  margin: 10px auto;

  padding: 0 20px;
  width: 1160px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = ({ books, pages }) => ({
  pager: pages.pager,
  books: books.data,
  loading: books.loading,
});

export default connect(mapStateToProps, { loadBooks })(HomePage);
