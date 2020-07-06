import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateUser } from "actions/auth";

import Container from "components/UI/Container";
import Headline from "components/UI/Headline";
import Paragraph from "components/UI/Paragraph";
import Spinner from "components/Spinner";
import UserForm from "./components/UserForm";

const UserPage = ({ user, updateUser }) => {
  const onUserSubmit = (about, avatar) => {
    const data = {
      about,
      avatar,
    };

    updateUser(data);
  };

  const greeting = (user && user.name) || "bookworm";

  return user === null ? (
    <Spinner />
  ) : (
    <Container>
      <Headline as="h2">User Page</Headline>
      <Paragraph>Welcome, {greeting}!</Paragraph>
      <UserForm onSubmit={onUserSubmit} user={user} />
    </Container>
  );
};

UserPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    avatar: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps, { updateUser })(UserPage);
