import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({ type, placeholder, name, value, onChange, autoFocus }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  margin-bottom: 15px;
  padding: 0 10px;
  width: 300px;
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

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
