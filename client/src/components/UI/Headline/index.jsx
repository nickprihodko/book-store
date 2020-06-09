import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Headline = ({ title, as }) => {
  return <StyledHeader as={as}>{title}</StyledHeader>;
};

const StyledHeader = styled.h1`
  margin: 50px 0 20px;

  font-family: "Oxygen Bold";
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #1a237e;
`;

Headline.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Headline;
