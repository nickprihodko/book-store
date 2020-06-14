import React from "react";

import Container from "../../../../components/UI/Container";
import Form2 from "../../../../components/UI/Form2";
import Headline from "../../../../components/UI/Headline";
import Button from "../../../../components/UI/Button";

import userDefaultLogo from "../../../../assets/img/user.png";

const ProfileForm = ({ profile, onSubmit, user }) => {
  const [about, setAbout] = React.useState(profile.about || "");

  const handleChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ about });
  };

  return (
    <Container>
      <Headline title="User Profile" as="h2" />
      <p style={{ textAlign: "center" }}>Welcome, {user && user.name}!</p>
      <Form2 onSubmit={handleSubmit}>
        <img src={userDefaultLogo} alt="User avatar" width="100" height="100" />
        <input type="file" name="avatar" onChange={handleChange} />
        <textarea
          name="about"
          cols="30"
          rows="10"
          value={about}
          onChange={handleChange}
        />
        <Button type="submit">Save</Button>
      </Form2>
    </Container>
  );
};

export default ProfileForm;
