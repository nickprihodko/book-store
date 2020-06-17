import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { setCategory, loadCategories } from "../../../../actions/books";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SelectCategory = ({ name, categories, setCategory, loadCategories }) => {
  useEffect(() => {
    loadCategories();
  }, []);

  let query = useQuery();
  const category = query.get("category");

  if (category) {
    setCategory(category);
  }

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <StyledSelect name={name} onChange={handleChange} defaultValue="0">
      {categories.map((item) => {
        return (
          <Option key={item.id} value={item.id}>
            {item.name}
          </Option>
        );
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  margin-bottom: 15px;
  padding: 0 10px;
  width: 150px;
  height: 30px;
  box-sizing: border-box;

  border: 2px solid #5c6bc0;
  border-radius: 4px;
  background-color: transparent;
  outline: none;

  &:hover,
  &:focus {
    border-color: #3949ab;
  }
`;

const Option = styled.option`
  font-family: "Oxygen Bold";
`;

SelectCategory.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  categories: books.categories,
});

export default connect(mapStateToProps, { setCategory, loadCategories })(
  SelectCategory
);
