import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getCurrentProfile } from "../../actions/profile";
import { createProfile } from "../../actions/profile";

import Container from "../../components/UI/Container";
import Headline from "../../components/UI/Headline";
import Spinner from "../../components/Spinner";
import ProfileForm from "./components/ProfileForm";

const ProfilePage = ({
  getCurrentProfile,
  createProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const onProfileSubmit = (data) => {
    createProfile(data);
  };

  return profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <Headline title="User Profile" as="h2" />
      <Paragraph>Welcome, {user && user.name}!</Paragraph>
      <ProfileForm onSubmit={onProfileSubmit} profile={profile} />
    </Container>
  );
};

const Paragraph = styled.p`
  text-align: center;
`;

ProfilePage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  createProfile,
})(ProfilePage);
