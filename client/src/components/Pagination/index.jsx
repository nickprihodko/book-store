import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ pager }) => {
  const { pages, currentPage, totalPages } = pager;
  const isDisabledPrev = currentPage === 1;
  const isDisabledLast = currentPage === totalPages;

  if (totalPages === 1) {
    return null;
  }

  return (
    <PaginationList>
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=1` }}
          as={isDisabledPrev ? "span" : Link}
        >
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=${currentPage - 1}` }}
          as={isDisabledPrev ? "span" : Link}
        >
          Previous
        </PaginationLink>
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            to={{ search: `?page=${page}` }}
            active={currentPage === page ? "true" : "false"}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=${currentPage + 1}` }}
          as={isDisabledLast ? "span" : Link}
        >
          Next
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          to={{ search: `?page=${totalPages}` }}
          as={isDisabledLast ? "span" : Link}
        >
          Last1
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

export default Pagination;
