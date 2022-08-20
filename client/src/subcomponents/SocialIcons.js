import React from "react";
import { NavLink } from "react-router-dom";
import {
  LinkedIn,
  Github,
  Whatsapp,
  Instagram,
  YinYang,
} from "../components/AllSvgs";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  & > div > a > svg {
    filter: ${(props) =>
      props.click ? "drop-shadow(0 0 4px rgba(0,0,0,.5))" : "none"};
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  box-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
`;

function SocialIcons(props) {
  return (
    <Icons click={props.click} style={{ ...props.style }}>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1,
        }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/animesh28/" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.click ? `${darkTheme.text}` : `${darkTheme.body}`}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.2,
        }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://www.linkedin.com/in/animesh-singh-02a9b417b/",
          }}
        >
          <LinkedIn
            width={25}
            height={25}
            fill={YinYang ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.4,
        }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://wa.me/message/5SUJFL454E7OJ1" }}
        >
          <Whatsapp
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.6,
        }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.instagram.com/_ani_mesh._/" }}
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
        color={props.theme}
        click={props.click}
      />
    </Icons>
  );
}

export default SocialIcons;
