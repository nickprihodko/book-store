import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ASide from "./components/ASide";
import SortFilter from "../../components/SortFilter";
import BookList from "../../components/BookList";

const HomePage = ({ location }) => {
  return (
    <Main>
      <h1 className="visually-hidden">Main Page</h1>
      <ASide />
      <ContentContainer>
        <SortFilter />
        <BookList location={location} />
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
`;

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default HomePage;
