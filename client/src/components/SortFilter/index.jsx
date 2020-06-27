import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SortFilter = () => {
  let query = useQuery();
  const sort = query.get("sort");
  const category = query.get("category");
  const priceFrom = query.get("pricefrom");
  const priceTo = query.get("priceto");
  const rateFrom = query.get("ratefrom");
  const rateTo = query.get("rateto");
  const page = query.get("page");

  let queryString = "";

  if (page) {
    queryString += `&page=${page}`;
  }

  if (category) {
    queryString += `&category=${category}`;
  }
  if (priceFrom) {
    queryString += `&pricefrom=${priceFrom}&priceto=${priceTo}`;
  }
  if (rateFrom) {
    queryString += `&ratefrom=${rateFrom}&rateto=${rateTo}`;
  }

  return (
    <Headline>
      <SortLabel>Sort:</SortLabel>
      <StyledSortLink
        to={`/?sort=price${queryString}`}
        className={sort === "price" ? "active" : ""}
      >
        price
      </StyledSortLink>
      <StyledSortLink
        to={`/?sort=rate${queryString}`}
        className={sort === "rate" ? "active" : ""}
      >
        rate
      </StyledSortLink>
      <StyledSortLink
        to={`/?sort=title${queryString}`}
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

export default SortFilter;
