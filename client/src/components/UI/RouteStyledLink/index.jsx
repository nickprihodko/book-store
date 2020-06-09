import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const RouteStyledLink = ({ to, value }) => {
  return <StyledLink to={to}>{value}</StyledLink>;
};

const StyledLink = styled(Link)`
  font-family: "Oxygen Bold";
  color: #5c6bc0;

  &:hover,
  &:focus {
    color: #3949ab;
  }

  &:active {
    color: #283593;
  }
`;

RouteStyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RouteStyledLink;
