import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Textarea from "../../../../components/UI/Textarea";
import Button from "../../../../components/UI/Button";

const AddPost = ({ onSubmit }) => {
  const [post, setPost] = React.useState("");

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPost(""); // clear post field
    onSubmit(post);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <Legend>Reviews</Legend>
        <Textarea
          name="post"
          placeholder="type something..."
          value={post}
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

AddPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddPost;
