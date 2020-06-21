import styled from "styled-components";
import PropTypes from "prop-types";

const Number = styled.input`
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

Number.defaultProps = {
  type: "number",
};

Number.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Number;
