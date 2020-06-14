import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCurrentProfile } from "../../actions/profile";
import { createProfile } from "../../actions/profile";

import Spinner from "../../components/Spinner";

import Form from "./components/ProfileForm";

const ProfilePage = ({
  getCurrentProfile,
  createProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const handleSubmit = (data) => {
    createProfile(data);
  };

  // here is problem
  return profile === null ? (
    <Spinner />
  ) : (
    <Form profile={profile} onSubmit={handleSubmit} user={user} />
  );
};

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
