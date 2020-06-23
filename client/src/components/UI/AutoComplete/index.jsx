import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const AutoComplete = ({ items, onChange, onSelected }) => {
  const [state, setState] = useState({ suggestions: [], text: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    setState({ ...state, suggestions, text: e.target.value });
    onChange(e.target.value);
  };

  const renderSuggestions = () => {
    const { suggestions } = state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <Ul>
        {suggestions.map((item) => (
          <Li key={uuid()} onClick={() => suggestionSelected(item)}>
            {item}
          </Li>
        ))}
      </Ul>
    );
  };

  const suggestionSelected = (value) => {
    setState({ ...state, suggestions: [], text: value });
    onSelected(value);
  };

  return (
    <Div>
      <Input
        type="text"
        name="author"
        value={state.text}
        onChange={handleChange}
      ></Input>
      {renderSuggestions()}
    </Div>
  );
};

const Div = styled.div`
  position: relative;
`;

const Input = styled.input`
  margin-bottom: 5px;
  padding: 0 10px;
  width: 100%;
  height: 30px;
  box-sizing: border-box;

  border: 2px solid #5c6bc0;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
`;

const Ul = styled.ul`
  position: absolute;
  top: 32px;
  left: 2px;
  width: 166px;

  border: 1px solid #c5cae9;
  background-color: #ffffff;
`;

const Li = styled.li`
  padding: 5px 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;

    background-color: #c5cae9;
  }
`;

AutoComplete.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default AutoComplete;
