import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Me from '../assets/Images/profile-pic.png'

const Box = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 55vw;
    height: 55vh;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
`

const SubBox = styled.div`
    width: 50%;
    display: flex;
    position: relative;

    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: (-50%, 0);
        height: auto;
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba},.6)`};
        font-size: calc(.5rem + 1.5vw);
        font-weight: 300;
    }
`

function Intro(props) {
  return (
    <Box
        initial={{height: '0'}}
        animate={{height: '55vh'}}
        transition={{type: 'spring', duration: 2, delay: 1}}
    >
        <SubBox>
            <Text>
                <h1>Hi, </h1>
                <h3>I'm Animesh</h3>
                <h6>I design and code simple yet beautiful websites</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2}}  
            >
                <img className='pic' src={Me} alt="Profile Pic"/>
            </motion.div>
        </SubBox>
    </Box>

  )
}

export default Intro