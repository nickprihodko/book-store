import React from "react";
import styled from "styled-components";

const Radio = ({ children }) => {
  return (
    <Label>
      <Input type="radio" name="radio-group" />
      <RadioIndicator></RadioIndicator>
      <RadioDesc>{children}</RadioDesc>
    </Label>
  );
};

const Label = styled.label`
  position: relative;

  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  &:hover {
    color: #3f51b5;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + span::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -32px;
    transform: translateY(-50%);

    width: 8px;
    height: 8px;

    background-color: #7986cb;
    border-radius: 50%;
  }

  &:checked ~ span {
    color: #7986cb;
  }
`;

const RadioIndicator = styled.span`
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);

    width: 20px;
    height: 20px;

    border: 2px solid #7986cb;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const RadioDesc = styled.span`
  font-family: "Oxygen Bold";
`;

export default Radio;
