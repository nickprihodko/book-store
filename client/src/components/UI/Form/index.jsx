import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

const StyledForm = styled.form`
  text-align: center;
`;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
