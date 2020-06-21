import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Textarea from "../../../../components/UI/Textarea";
import Button from "../../../../components/UI/Button";

const AddReview = ({ onSubmit }) => {
  const [review, setReview] = React.useState("");

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview(""); // clear review field
    onSubmit(review);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <Legend>Reviews</Legend>
        <Textarea
          name="review"
          placeholder="type something..."
          value={review}
          onChange={handleChange}
        ></Textarea>
      </FieldSet>
      <Button type="submit">Add review</Button>
    </Form>
  );
};

const Form = styled.form`
  margin-bottom: 20px;
  width: 100%;
`;

const FieldSet = styled.fieldset`
  border: none;
`;

const Legend = styled.legend`
  margin-bottom: 10px;

  font-family: "Oxygen Bold";
  font-size: 24px;
  color: #1a237e;
`;

AddReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddReview;
