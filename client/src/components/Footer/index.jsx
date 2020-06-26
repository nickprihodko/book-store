import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter>&copy; Prihodko Nick</StyledFooter>;
};

const StyledFooter = styled.footer`
  margin: 10px;
  margin-top: auto;
  padding: 0 10px;

  height: 60px;

  font-family: "Oxygen Bold";
  line-height: 60px;
  text-align: right;
  color: #ffffff;

  background-color: #1a237e;
  border-radius: 4px;
`;

export default Footer;
