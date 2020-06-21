import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ type, children, ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin-bottom: 15px;
  width: 120px;
  height: 35px;

  font-family: "Oxygen Bold";
  font-size: 16px;
  line-height: 18px;
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

Button.defaultProps = {
  type: "submit",
};

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
