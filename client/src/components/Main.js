import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ContactMsg from "../subcomponents/ContactMsg";
import LogoComponent from "../subcomponents/LogoComponent";
import PowerButton from "../subcomponents/PowerButton";
import SocialIcons from "../subcomponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { mediaQueries } from "./Themes";
import useVH from "react-viewport-height";
import gsap from "gsap";
import { useHistory } from "react-router-dom";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  position: relative;
  overflow-x: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;

    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
`;
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #000000;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
        height: 50%;
        right:0;
        
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {
  const history = useHistory();
  useEffect(() => {
    const line1 = document.querySelector("#env-line-1");
    const line2 = document.querySelector("#env-line-2");
    const line3 = document.querySelector("#env-line-3");
    const mailIcon = document.querySelector("#mail-icon");
    const envLid = document.querySelector("#env-lid");
    const envPaper = document.querySelector("#env-paper");

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(envLid, 0.3, {
      scaleY: -1,
      y: 1.5,
    })
      .fromTo(
        envPaper,
        0.4,
        {
          transformOrigin: "50% 100%",
          scaleY: 0,
        },
        {
          scaleY: 1,
        },
        "=-0.25"
      )
      .staggerFromTo(
        [line1, line2, line3],
        0.3,
        {
          transformOrigin: "50% 50%",
          scaleX: 0,
        },
        {
          scaleX: 1,
        },
        -0.09
      );

    mailIcon.addEventListener("click", (event) => {
      if (mailIcon.classList.contains("toggled")) {
        tl.reverse();
      } else {
        tl.play();
        setTimeout(() => {
          history.push("/contact");
        }, 2000);
      }

      mailIcon.classList.toggle("toggled");
    });
  }, [history]);

  const [YingYang, setYingYang] = useState(false);
  const [path, setpath] = useState("");

  const handleYingYang = () => setYingYang(!YingYang);
  const vh = useVH();
  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <MainContainer
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={path === "about" || path === "skills" ? moveY : moveX}
      transition={{ duration: 0.5 }}
      div
      style={{ height: `${100 * vh}px` }}
    >
      <DarkDiv click={YingYang} />
      <Container>
        <LogoComponent theme={YingYang ? "dark" : "light"} />
        <PowerButton />
        {mq ? (
          <SocialIcons click={YingYang} theme="light" />
        ) : (
          <SocialIcons click={YingYang} theme={YingYang ? "dark" : "light"} />
        )}
        <Center click={YingYang}>
          {mq ? (
            <YinYang
              onClick={() => handleYingYang()}
              width={YinYang ? 80 : 150}
              height={YinYang ? 80 : 150}
              fill="currentColor"
            />
          ) : (
            <YinYang
              onClick={() => handleYingYang()}
              width={YinYang ? 120 : 200}
              height={YingYang ? 120 : 200}
              fill="currentColor"
            />
          )}

          <span>click here</span>
        </Center>

        {mq ? <ContactMsg click={+YingYang} /> : <ContactMsg click={+false} />}

        {mq ? (
          <Contact
            click={+YingYang}
            onClick={() => setpath("blog")}
            to="/contact"
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.h2>
          </Contact>
        ) : (
          <Contact click={+false} onClick={() => setpath("blog")} to="/contact">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.h2>
          </Contact>
        )}

        <Work click={+YingYang} to="/work">
          <motion.h2
            onClick={() => setpath("work")}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Work>

        <BottomBar>
          <About
            onClick={() => setYingYang(false)}
            click={mq ? +false : +YingYang}
            to="/about"
          >
            <motion.h2
              onClick={() => setpath("about")}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>

          <Skills to="/skills">
            <motion.h2
              onClick={() => setpath("skills")}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>

      {YingYang ? <Intro click={YingYang} /> : null}
    </MainContainer>
  );
};

export default Main;
