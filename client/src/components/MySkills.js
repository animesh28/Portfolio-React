import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../subcomponents/LogoComponent";
import PowerButton from "../subcomponents/PowerButton";
import ParticleComponent from "./ParticleComponent";
import { lightTheme, mediaQueries } from "./Themes";
import design from "../assets/Images/design.png";
import designLogo from "../assets/Images/designLogo.png";
import dev from "../assets/Images/dev.png";
import devLogo from "../assets/Images/devLogo.png";
import htmlIcon from "../assets/Images/htmlIcon.png";
import cssIcon from "../assets/Images/cssIcon.png";
import jsIcon from "../assets/Images/jsIcon.gif";
import reactIcon from "../assets/Images/reactIcon.gif";
import designMiddle from "../assets/Images/designIcon.png";
import devMiddle from "../assets/Images/devMiddle.png";
import phpIcon from "../assets/Images/phpIcon.png";
import sqlIcon from "../assets/Images/sqlIcon.png";
import nodeIcon from "../assets/Images/nodeIcon.png";
import mongoIcon from "../assets/Images/mongoIcon.png";
import CardComponent from "../subcomponents/Card";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  caret-color: rgba(0, 0, 0, 0);

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
            height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const BgHeading = styled(motion.h1)`
  position: fixed;
  top: 78%;
  right: 30%;
  color: rgba(0, 0, 0, 0.1);
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const IconLicense = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.65);
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  cursor: pointer;
  z-index: 10;
  caret-color: rgba(0, 0, 0, 0);

  img {
    max-height: 100%;
  }

  div {
    position: fixed;
    bottom: 1rem;
    right: 8rem;
    background-color: rgba(0, 0, 0, 0.65);
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease-in;
    font-size: 8px;

    &::after {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: 81%;
      right: -35px;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.65);
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }

    a {
      text-decoration: none;
      color: #fff;
      margin: 5px 0;
    }
  }
`;

function MySkills() {
  const [questionMark, setQuestionMark] = useState(null);

  useEffect(() => {
    if (questionMark != null) {
      const license = document.querySelector("#license");
      if (questionMark) {
        license.style.visibility = "visible";
        license.style.opacity = 1;
      } else {
        license.style.visibility = "hidden";
        license.style.opacity = 0;
      }
    }
  }, [questionMark]);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <IconLicense>
          <div
            id="license"
            onMouseOver={() => setQuestionMark(true)}
            onMouseOut={() => setQuestionMark(false)}
          >
            <a
              target="_blank"
              href="https://icons8.com/icon/5FzppYj4UHs3/color"
              rel="noreferrer"
            >
              Color icon by Icons8
            </a>
            <a
              target="_blank"
              href="https://icons8.com/icon/42472/question-mark"
              rel="noreferrer"
            >
              Question Mark icon by Icons8
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://icons8.com/icon/oR579SiWPF2c/coding"
            >
              Coding icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/KMNIRDqAfaOt/html"
              target="_blank"
              rel="noreferrer"
            >
              Html icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/cSmDCyXt8hcT/css"
              target="_blank"
              rel="noreferrer"
            >
              Css icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/hKrJAdwqbGgG/javascript"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/YYYhFVbH4vFv/react-native"
              target="_blank"
              rel="noreferrer"
            >
              React Native icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/QeAlg41wwUkb/design"
              target="_blank"
              rel="noreferrer"
            >
              Design icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/p7o7QWCx7SvS/coding"
              target="_blank"
              rel="noreferrer"
            >
              Coding icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/1q0xlAMYQeet/php-server"
              target="_blank"
              rel="noreferrer"
            >
              PHP Server icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/39858/mysql-logo"
              target="_blank"
              rel="noreferrer"
            >
              MySQL Logo icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/t9oCxEN7McHZ/nodejs"
              target="_blank"
              rel="noreferrer"
            >
              Nodejs icon by Icons8
            </a>
            <a
              href="https://icons8.com/icon/Y9VdL7V5XPIc/mongodb-a-cross-platform-document-oriented-database-program"
              target="_blank"
              rel="noreferrer"
            >
              MongoDB icon by Icons8
            </a>
          </div>
          <img
            src="https://img.icons8.com/dotty/80/000000/question-mark.png"
            onMouseOver={() => setQuestionMark(true)}
            onMouseOut={() => setQuestionMark(false)}
            alt="question mark"
          />
        </IconLicense>
        <LogoComponent />
        <PowerButton />
        <ParticleComponent theme="light" />
        <CardComponent
          skill={"Web Design"}
          img={design}
          logo={designLogo}
          middleIcon={designMiddle}
          icon1={htmlIcon}
          icon2={cssIcon}
          icon3={jsIcon}
          icon4={reactIcon}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        />

        <CardComponent
          skill={"Web Development"}
          img={dev}
          logo={devLogo}
          middleIcon={devMiddle}
          icon1={phpIcon}
          icon2={sqlIcon}
          icon3={nodeIcon}
          icon4={mongoIcon}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        />
        <BgHeading
          initial={{ y: "150px" }}
          animate={{ y: "0" }}
          transition={{ type: "spring", duration: 3 }}
        >
          Skills
        </BgHeading>
      </Box>
    </ThemeProvider>
  );
}

export default MySkills;
