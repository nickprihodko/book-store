import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import getSearchString from "../../../../utils/getSearchString";

// import { setFilter } from "../../../../actions/books";

import SelectCategory from "../SelectCategory";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ASide = ({ filter, setFilter }) => {
  const query = useQuery();
  const sort = query.get("sort");
  const category = query.get("category");

  let substr = "?";
  if (sort) {
    substr += `sort=${sort}`;
  }
  if (category) {
    substr += `&category=${category}`;
  }

  substr = getSearchString(filter, query);

  const handleClick = () => {
    console.log("handleClick");
  };

  return (
    <StyledAside>
      <form action="POST">
        <FilterLabel>FILTER:</FilterLabel>
        <FieldSet>
          <Legend>Category</Legend>
          <SelectCategory
            name="category"
            category={"category"}
          ></SelectCategory>
        </FieldSet>
        <FieldSet>
          <Legend>Author</Legend>
        </FieldSet>
        <FieldSet>
          <Legend>Price</Legend>
        </FieldSet>
        <FieldSet>
          <Legend>Rate</Legend>
        </FieldSet>
        <Link to={`/?${substr}`} onClick={handleClick}>
          Show
        </Link>
      </form>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  margin-right: 40px;
`;

const FilterLabel = styled.span`
  display: block;
  height: 35px;
  margin-bottom: 20px;

  font-family: "Oxygen Bold";
  line-height: 37px;
  text-transform: uppercase;
  color: #1a237e;
`;

const FieldSet = styled.fieldset`
  border: 0;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
`;

const Legend = styled.legend`
  margin-bottom: 20px;
  padding: 20px 0 0;

  font-family: "Oxygen Bold";
  text-transform: uppercase;
  color: #1a237e;

  border-top: 2px solid;
`;

const mapStateToProps = ({ books }) => ({
  filter: books.filter,
});

export default connect(mapStateToProps)(ASide);
