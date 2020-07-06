import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { setAlert } from "actions/alert";

import Input from "components/UI/Input";
import Textarea from "components/UI/Textarea";
import SelectCategory from "components/SelectCategory";
import Number from "components/UI/Number";
import Button from "components/UI/Button";

const BookForm = ({ onSubmit, setAlert }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    fragment: "",
    price: "",
  });

  const { title, author, category, description, fragment, price } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkFields = () => {
    let isValid = true;

    if (title.length === 0) {
      setAlert("Please enter a title", "danger");
      isValid = false;
    }

    if (author.length === 0) {
      setAlert("Please enter an author", "danger");
      isValid = false;
    }

    if (!category) {
      setAlert("Please enter an category", "danger");
      isValid = false;
    }

    if (!price) {
      setAlert("Please enter a price", "danger");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAllValid = checkFields();
    if (isAllValid) {
      onSubmit(formData);
      setFormData({
        ...formData,
        title: "",
        author: "",
        category: "",
        description: "",
        fragment: "",
        price: "",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <span>Title:</span>
        <Input
          placeholder="title of a book"
          name="title"
          value={title}
          onChange={handleChange}
          autoFocus
        />
      </Label>
      <Label>
        <span>Author:</span>
        <Input
          placeholder="author of a book"
          name="author"
          value={author}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span>Category:</span>
        <SelectCategory value={category} onCategoryChange={handleChange} />
      </Label>
      <Label>
        <span>Description:</span>
        <Textarea
          placeholder="description of a book"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span>Fragment:</span>
        <Textarea
          placeholder="fragment of a book"
          name="fragment"
          value={fragment}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span>Price:</span>
        <Number
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;

  font-size: 16px;
  font-family: "Oxygen Bold";
  text-align: left;
  color: #1a237e;
`;

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(BookForm);
