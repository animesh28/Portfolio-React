import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import logo from "../assets/Images/logo.png";

function LogoComponent() {
  return (
    <Logo className="logo">
      <img src={logo} alt="" />
    </Logo>
  );
}

const Logo = styled.h1`
  display: inline-block;
  font-family: "Pacifico", cursive !important;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 30;

  img {
    height: 75px;
  }
`;

export default LogoComponent;
