import React, { Fragment, useState } from "react";
import styled from "styled-components";

import Textarea from "../../../../components/UI/Textarea";
import Button from "../../../../components/UI/Button";
import SelectFile from "../../../../components/SelectFile";

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

  const onModalShow = () => {
    setModal(true);
  };

  const onModalClose = () => {
    setModal(false);
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <AvatarContainer>
          <Avatar isAvatar={user.avatar} name="avatar" />
          <AvatarImageSelect onClick={onModalShow} />
        </AvatarContainer>
        <Textarea
          name="about"
          value={about}
          onChange={handleChange}
          placeholder="introduce yourself..."
        />
        <Button type="submit">Save</Button>
      </Form>
      {modal ? (
        <SelectFile
          title="Select your terrific avatar!"
          onModalClose={onModalClose}
          onModalChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
    </Fragment>
  );
};

const AvatarImageSelect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: none;
  width: 100px;
  height: 100px;

  background: url("/images/select-file.png") no-repeat center center;
  background-size: contain;
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

  ${({ isAvatar }) =>
    isAvatar
      ? `background-image: url(${isAvatar});`
      : `background-image: url("/images/user.png")`}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export default UserForm;
