import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadCategories } from "../../actions/books";

const SelectCategory = ({
  value,
  onCategoryChange,
  categories,
  loadCategories,
}) => {
  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <StyledSelect
      name="category"
      onChange={(e) => onCategoryChange(e)}
      value={value}
    >
      {categories.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  margin-bottom: 15px;
  padding: 0 10px;
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

SelectCategory.propTypes = {
  value: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  loadCategories: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books }) => ({
  categories: books.categories,
});

export default connect(mapStateToProps, { loadCategories })(SelectCategory);
