import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ children }) => {
  return createPortal(
    <StyledDiv>{children}</StyledDiv>,
    document.getElementById("modalRoot")
  );
};

const StyledDiv = styled.div`
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

export default Modal;
