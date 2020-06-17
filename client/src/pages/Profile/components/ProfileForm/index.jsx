import React from "react";
import styled from "styled-components";

import Textarea from "../../../../components/UI/Textarea";
import Button from "../../../../components/UI/Button";

import userDefaultLogo from "../../../../assets/img/user.png";

const ProfileForm = ({ onSubmit, profile }) => {
  const [about, setAbout] = React.useState(profile.about || "");

  const handleChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ about });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <img src={userDefaultLogo} alt="User avatar" width="100" height="100" />
      <Textarea
        name="about"
        value={about}
        onChange={handleChange}
        placeholder="Introduce yourself"
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
`;

export default ProfileForm;
