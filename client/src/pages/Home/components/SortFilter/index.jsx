import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { setSort } from "../../../../actions/books";

import getSearchString from "../../../../utils/getSearchString";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SortFilter = ({ setSort }) => {
  let query = useQuery();
  const sort = query.get("sort");
  const category = query.get("category");

  const substr = category ? `&category=${category}` : "";

  if (sort) {
    setSort(sort);
  }

  const handleClick = (e) => {
    setSort(e.target.innerText);
  };

  return (
    <Headline>
      <SortLabel>Sort:</SortLabel>
      <StyledSortLink
        to={`/?sort=price${substr}`}
        onClick={handleClick}
        className={sort === "price" ? "active" : ""}
      >
        price
      </StyledSortLink>
      <StyledSortLink
        to={`/?sort=rate${substr}`}
        onClick={handleClick}
        className={sort === "rate" ? "active" : ""}
      >
        rate
      </StyledSortLink>
      <StyledSortLink
        to={`/?sort=title${substr}`}
        onClick={handleClick}
        className={sort === "title" ? "active" : ""}
      >
        title
      </StyledSortLink>
    </Headline>
  );
};

const Headline = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & * {
    margin-right: 10px;
  }

  .active {
    color: #ffffff;

    background-color: #9fa8da;
    cursor: auto;

    &:hover,
    &:focus {
      background-color: #9fa8da;
    }
  }
`;

const SortLabel = styled.span`
  margin-right: 20px;

  font-family: "Oxygen Bold";
  text-transform: uppercase;
  color: #1a237e;
`;

const StyledSortLink = styled(Link)`
  width: 80px;
  height: 35px;

  font-family: "Oxygen Bold";
  text-align: center;
  line-height: 35px;

  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #c5cae9;
  }

  &:active {
    color: #ffffff;

    background-color: #9fa8da;
  }
`;

// const mapStateToProps = ({ books }) => ({
//   filter: books.filter,
// });

export default connect(null, { setSort })(SortFilter);
