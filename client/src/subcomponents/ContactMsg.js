import React, { useState } from "react";
import styled from "styled-components";
import { Email } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Contact = styled.div`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Line = styled(motion.span)`
  width: 2.5px;
  height: 10rem;
  background-color: ${(props) => props.theme.text};
`;

function ContactMsg(props) {
  const [dropEmail, setDropEmail] = useState(false);
  return (
    <Contact click={props.click}>
      <motion.h3
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
        onClick={() => setDropEmail(!dropEmail)}
      >
        Say Hi...
      </motion.h3>
      {dropEmail ? (
        <Line
          initial={{
            visibility: "hidden",
            height: 0,
            transition: { type: "spring", duration: 1.5, delay: 0 },
          }}
          animate={{
            visibility: "visible",
            height: "8rem",
            transition: { type: "spring", duration: 1.5, delay: 0 },
          }}
        />
      ) : (
        <Line
          initial={{
            visibility: "hidden",
            height: "8rem",
            transition: { type: "spring", duration: 1.5, delay: 0 },
          }}
          animate={{
            visibility: "visible",
            height: 0,
            transition: { type: "spring", duration: 1.5, delay: 0 },
          }}
        />
      )}
      {dropEmail ? (
        <Email
          initial={{
            y: 200,
            opacity: 0,
            transition: { type: "spring", duration: 1.5, delay: 0 },
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", duration: 1.5, delay: 0 },
          }}
          style={{ marginTop: "-40px" }}
        />
      ) : (
        <Email
          style={{
            marginTop: "-40px",
            opacity: 0,
            visibility: "hidden",
          }}
        />
      )}
    </Contact>
  );
}

export default ContactMsg;
