import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import qs from "qs";

import { loadAuthors } from "../../../../actions/books";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import SelectCategory from "../../../../components/SelectCategory";
import AutoComplete from "../../../../components/UI/AutoComplete";

const BooksFilter = ({ authors, loadAuthors }) => {
  useEffect(() => {
    loadAuthors();
  }, [loadAuthors]);

  const listAuthors = useMemo(() => authors.map((item) => item.author), [
    authors,
  ]);

  const { search } = useLocation();
  let query = qs.parse(search, { ignoreQueryPrefix: true });

  const [formData, setFormData] = useState({
    category: query.category || "",
    author: query.author || "",
    price: { min: query.pricefrom || 0, max: query.priceto || 999 },
    rate: { min: query.ratefrom || 0, max: query.rateto || 5 },
  });

  const onCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const onAuthorChange = (value) => {
    setFormData({ ...formData, author: value });
  };

  const onAuthorSelected = (value) => {
    setFormData({ ...formData, author: value });
  };

  const onPriceChange = (value) => {
    setFormData({
      ...formData,
      price: { ...formData.price, min: value.value.min, max: value.value.max },
    });
  };

  const onRateChange = (value) => {
    setFormData({
      ...formData,
      rate: { ...formData.rate, min: value.value.min, max: value.value.max },
    });
  };

  if (formData.category && +formData.category !== 1) {
    query.category = formData.category;
  } else {
    query.category = "";
  }

  query.author = formData.author;
  query.pricefrom = formData.price.min;
  query.priceto = formData.price.max;
  query.ratefrom = formData.rate.min;
  query.rateto = formData.rate.max;

  const entries = Object.entries(query);
  let queryString = entries.reduce((sum, cur) => {
    return `${sum}${cur[0]}=${cur[1]}&`;
  }, "?");
  queryString = queryString.slice(0, queryString.length - 1);

  const handleClick = () => {
    //
  };

  return (
    <Aside>
      <Form>
        <FilterLabel>FILTER:</FilterLabel>
        <FieldSet>
          <Legend>Category</Legend>
          <SelectCategory
            value={formData.category}
            onCategoryChange={onCategoryChange}
          />
        </FieldSet>
        <FieldSet>
          <Legend>Author</Legend>
          <AutoComplete
            value={formData.author}
            items={listAuthors}
            onChange={onAuthorChange}
            onSelected={onAuthorSelected}
          />
        </FieldSet>
        <FieldSet>
          <Legend>Price</Legend>
          <InputRangeContainer>
            <InputRange
              formatLabel={(value) => `${value} $`}
              minValue={0}
              maxValue={999}
              name="price"
              value={formData.price}
              onChange={(value) => onPriceChange({ value })}
            />
          </InputRangeContainer>
        </FieldSet>
        <FieldSet>
          <Legend>Rate</Legend>
          <InputRangeContainer>
            <InputRange
              minValue={0}
              maxValue={5}
              name="rate"
              value={formData.rate}
              onChange={(value) => onRateChange({ value })}
            />
          </InputRangeContainer>
        </FieldSet>
        <FilterLink to={`/${queryString}`} onClick={handleClick}>
          <span>Show</span>
        </FilterLink>
      </Form>
    </Aside>
  );
};

const Aside = styled.aside`
  margin-right: 40px;
`;

const Form = styled.form`
  width: 172px;
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

const InputRangeContainer = styled.div`
  margin-bottom: 15px;
  padding: 0px 7px;
`;

const FilterLink = styled(Link)`
  display: block;
  width: 120px;
  height: 35px;

  font-family: "Oxygen Bold";
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;

  background-color: #5c6bc0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #3949ab;
  }

  &:active {
    background-color: #283593;
    box-shadow: 0 3px rgba(0, 0, 0, 0.1) inset;
  }

  &:active span {
    opacity: 0.3;
  }
`;

BooksFilter.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
    })
  ).isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books }) => ({
  authors: books.authors,
});

export default connect(mapStateToProps, { loadAuthors })(BooksFilter);
