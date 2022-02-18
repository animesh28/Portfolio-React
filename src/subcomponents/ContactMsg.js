import React from 'react'
import styled from 'styled-components'
import Email from '../components/AllSvgs'
import { motion } from 'framer-motion'

const Contact = styled.div`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const Line = styled(motion.span)`
    width: 2.5px;
    height: 10rem;
    background-color: ${props => props.theme.text};
`


function ContactMsg() {
  return (
    <Contact >
        <motion.h2
          initial={{
            y: -200,
            transition: {type: 'spring', duration: 1.5, delay: 1}
          }}
          animate={{
            y: 0,
            transition: {type: 'spring', duration: 1.5, delay: 1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
            Say Hi...
        </motion.h2>
        <Line
          initial={{
            height: 0,
            transition: {type: 'spring', duration: 1.5, delay: 1}
          }}
          animate={{
            height: '8rem',
            transition: {type: 'spring', duration: 1.5, delay: 1}
          }}
        />
        <Email 
        initial={{
          y: 200,
          opacity: 0,
          transition: {type: 'spring', duration: 1.5, delay: 1}
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {type: 'spring', duration: 1.5, delay: 1}
        }}
        style={{marginTop: "-40px"}}/>
    </Contact>
  )
}

export default ContactMsg