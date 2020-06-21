import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import qs from "qs";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import SelectCategory from "../../../../components/SelectCategory";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ASide = () => {
  const query = useQuery();

  // let query = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

  console.log("search:", useLocation().search);

  const sort = query.get("sort");
  const category = query.get("category");
  const priceFrom = query.get("pricefrom");
  const priceTo = query.get("priceto");
  const rateFrom = query.get("ratefrom");
  const rateTo = query.get("rateto");

  const [formData, setFormData] = useState({
    category: "",
    price: { min: 0, max: 999 },
    rate: { min: 0, max: 5 },
  });

  const onCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const onPriceChange = (value) => {
    setFormData({
      ...formData,
      price: { ...formData.price, min: value.value.min, max: value.value.max },
    });
  };

  const onRateChange = (value) => {
    console.log(typeof value.value.min);
    setFormData({
      ...formData,

      rate: { ...formData.rate, min: value.value.min, max: value.value.max },
    });
  };

  if (!formData.category && category) {
    setFormData({ ...formData, category: category });
  }

  if (!formData.price.min && +priceFrom) {
    setFormData({
      ...formData,
      price: { ...formData.price, min: +priceFrom, max: +priceTo },
    });
  }

  if (!formData.rate.min && +rateFrom) {
    setFormData({
      ...formData,
      rate: { ...formData.rate, min: +rateFrom, max: +rateTo },
    });
  }

  let queryString = "";

  if (sort) {
    queryString = `?sort=${sort}`;
  }

  if (formData.category) {
    if (formData.category !== "1") {
      if (queryString) {
        queryString += `&category=${formData.category}`;
      } else {
        queryString += `?category=${formData.category}`;
      }
    }
  } else {
    if (queryString) {
      if (category) {
        queryString += `&category=${category}`;
      }
    } else {
      if (category) {
        queryString += `?category=${category}`;
      }
    }
  }

  if (+priceFrom > 0 && +priceTo < 999) {
    if (queryString) {
      if (priceFrom) {
        queryString += `&pricefrom=${priceFrom}&priceto=${priceTo}`;
      }
    } else {
      if (priceFrom) {
        queryString += `?pricefrom=${priceFrom}&priceto=${priceTo}`;
      }
    }
  } else {
    if (queryString) {
      queryString += `&pricefrom=${formData.price.min}&priceto=${formData.price.max}`;
    } else {
      queryString += `?pricefrom=${formData.price.min}&priceto=${formData.price.max}`;
    }
  }

  if (+rateFrom > 0 && +rateTo < 5) {
    if (queryString) {
      if (rateFrom) {
        queryString += `&ratefrom=${rateFrom}&rateto=${rateTo}`;
      }
    } else {
      if (rateFrom) {
        queryString += `?ratefrom=${rateFrom}&rateto=${rateTo}`;
      }
    }
  } else {
    if (queryString) {
      queryString += `&ratefrom=${formData.rate.min}&rateto=${formData.rate.max}`;
    } else {
      queryString += `?ratefrom=${rateFrom}&rateto=${rateTo}`;
    }
  }

  const handleClick = () => {
    //
  };

  return (
    <Aside>
      <form>
        <FilterLabel>FILTER:</FilterLabel>
        <FieldSet>
          <Legend>Category</Legend>
          <SelectCategory
            value={formData.category}
            onCategoryChange={onCategoryChange}
          ></SelectCategory>
        </FieldSet>
        <FieldSet>
          <Legend>Author</Legend>
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
      </form>
    </Aside>
  );
};

const Aside = styled.aside`
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

export default ASide;
