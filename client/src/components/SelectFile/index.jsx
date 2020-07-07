import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Headline from "../UI/Headline";
import Button from "../UI/Button";

const SelectFile = ({ title, onModalClose, onModalChange, onSubmit }) => {
  const handleModalClose = (e) => {
    onModalClose(e);
  };

  const handleChange = (e) => {
    onModalChange(e);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <>
      <ModalClose onClick={handleModalClose} />
      <Headline as="h2">{title}</Headline>
      <FileInput
        type="file"
        name="file"
        accept="image/*,image/jpeg"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Save</Button>
    </>
  );
};

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 30px;
  height: 30px;

  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.3;
  background-color: transparent;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;

    width: 30px;
    height: 2px;

    background-color: #1a237e;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

SelectFile.defaultProps = {
  title: "Select file",
};

SelectFile.propTypes = {
  title: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onModalChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SelectFile;
