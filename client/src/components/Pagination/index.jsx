import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Pagination = ({ pager }) => {
  let query = useQuery();
  const sort = query.get("sort");
  const category = query.get("category");
  const priceFrom = query.get("pricefrom");
  const priceTo = query.get("priceto");
  const rateFrom = query.get("ratefrom");
  const rateTo = query.get("rateto");

  let queryString = "";

  if (sort) {
    queryString += `&sort=${sort}`;
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

  const { pages, currentPage, totalPages } = pager;
  const isDisabledPrev = currentPage === 1;
  const isDisabledLast = currentPage === totalPages;

  if (totalPages === 1 || totalPages === 0) {
    return null;
  }

  return (
    <PaginationList>
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=1${queryString}` }}
          as={isDisabledPrev ? "span" : Link}
        >
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=${currentPage - 1}${queryString}` }}
          as={isDisabledPrev ? "span" : Link}
        >
          Previous
        </PaginationLink>
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            to={{ search: `?page=${page}${queryString}` }}
            active={currentPage === page ? "true" : "false"}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=${currentPage + 1}${queryString}` }}
          as={isDisabledLast ? "span" : Link}
        >
          Next
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=${totalPages}${queryString}` }}
          as={isDisabledLast ? "span" : Link}
        >
          Last
        </PaginationLink>
      </PaginationItem>
    </PaginationList>
  );
};

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const PaginationLink = styled(Link)`
  display: block;
  padding: 10px;

  font-family: "Oxygen Bold";
  color: #1a237e;

  ${({ as, active }) =>
    active === "true"
      ? `color: #ffffff; background-color: #1a237e;`
      : as === "span"
      ? `color: #6c757d;`
      : `
    &:hover,
    &:focus {
      color: #311b92;
      background-color: #e9ecef;
      border-color: #dee2e6;`}
`;

const PaginationItem = styled.li`
  border: 1px solid #c5cae9;
  border-right: none;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 1px solid #c5cae9;
  }
`;

Pagination.propTypes = {
  pager: PropTypes.shape({
    totalItems: PropTypes.number,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    totalPages: PropTypes.number,
    startPage: PropTypes.number,
    endPage: PropTypes.number,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
    pages: PropTypes.array,
  }).isRequired,
};

export default Pagination;
