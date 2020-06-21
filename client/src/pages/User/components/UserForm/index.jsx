import React, { Fragment } from "react";
import styled from "styled-components";

import Textarea from "../../../../components/UI/Textarea";
import Button from "../../../../components/UI/Button";
import Headline from "../../../../components/UI/Headline";

const UserForm = ({ onSubmit, user }) => {
  const [about, setAbout] = React.useState(user.about || "");
  const [avatar, setAvatar] = React.useState(user.avatar || "");
  const [modal, setModal] = React.useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "avatar-photo":
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
          <Avatar
            style={
              user.avatar
                ? { backgroundImage: `url(${user.avatar})` }
                : {
                    backgroundImage: `url(${"/images/user.png"})`,
                  }
            }
            name="avatar"
          />
          <FileContainer className="select-file">
            <SelectAvatarContainer>
              <SelectAvatar
                style={{
                  backgroundImage: `url(${"/images/select-avatar.png"})`,
                }}
                onClick={onModalShow}
              />
            </SelectAvatarContainer>
          </FileContainer>
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
        <Modal>
          <ModalClose onClick={onModalClose}></ModalClose>
          <Headline title="Select your terrific avatar!" as="h2" />
          <FileInput
            type="file"
            name="avatar-photo"
            accept="image/*,image/jpeg"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Save</Button>
        </Modal>
      ) : null}
    </Fragment>
  );
};

const AvatarContainer = styled.div`
  position: relative;

  margin-bottom: 10px;
  width: 104px;
  height: 104px;

  &:hover .select-file {
    display: block;

    background-color: #f5f5f5;
  }
`;

const Avatar = styled.div`
  margin-bottom: 5px;
  width: 100px;
  height: 100px;

  background-size: cover;
  border: 2px solid #1a237e;
  border-radius: 50%;
`;

const SelectAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SelectAvatar = styled.div`
  width: 50px;
  height: 50px;

  background-size: contain;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const FileContainer = styled.div`
  position: absolute;
  top: 0;

  display: none;
  width: 100px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);

  background-color: red;
  border: 2px solid #1a237e;
  border-radius: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 130px;
  left: 50%;
  z-index: 1;

  display: block;
  width: 460px;
  height: 502px;
  margin-left: -230px;
  padding: 50px 70px;
  box-sizing: border-box;

  text-align: center;

  background-color: #ffffff;
  box-shadow: 0 30px 50px;

  animation: bounce 0.6s;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 30px;
  height: 30px;

  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.3;
  background-color: transparent;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;

    width: 30px;
    height: 2px;

    background-color: #1a237e;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export default UserForm;
