import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Textarea from "components/UI/Textarea";
import Button from "components/UI/Button";
import Modal from "components/Modal";
import SelectFile from "components/SelectFile";

const UserForm = ({ onSubmit, user }) => {
  const [about, setAbout] = useState(user.about || "");
  const [avatar, setAvatar] = useState(user.avatar || "");
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "file":
        setAvatar(e.target.files[0]);
        break;

      default:
        setAbout(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(about, avatar);
    setModal(false);
  };

  const handleModalShow = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <AvatarContainer>
          <Avatar isAvatar={user.avatar} name="avatar" />
          <AvatarImageSelect onClick={handleModalShow} />
        </AvatarContainer>
        <Textarea
          name="about"
          value={about}
          onChange={handleChange}
          placeholder="introduce yourself..."
        />
        <Button type="submit">Save</Button>
      </Form>
      {modal && (
        <Modal>
          <SelectFile
            title="Select your terrific avatar!"
            onModalClose={handleModalShow}
            onModalChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
};

const AvatarImageSelect = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: none;
  width: 100px;
  height: 100px;

  background: url("/images/select-file.png") no-repeat center center;
  background-size: contain;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;

  &:active {
    opacity: 1;
  }
`;

const AvatarContainer = styled.div`
  position: relative;

  margin-bottom: 10px;
  width: 104px;
  height: 104px;

  &:hover {
    ${AvatarImageSelect} {
      display: block;

      background-color: #f5f5f5;
    }
  }
`;

const Avatar = styled.div`
  margin-bottom: 5px;
  width: 100px;
  height: 100px;

  background-size: cover;
  border: 2px solid #1a237e;
  border-radius: 50%;

  background-image: ${({ isAvatar }) =>
    isAvatar ? `url(${isAvatar})` : `url("/images/user.png")`};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    avatar: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};

export default UserForm;
