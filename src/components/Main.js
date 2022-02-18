import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import ContactMsg from '../subcomponents/ContactMsg'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: ${props => props.theme.text};
    position: relative;

    h1, h2, h3, h4, h5, h6 {
        font-family: "Karla", sans-serif;
        font-weight: 600;
    } 
`

const Container = styled.div `
    padding: 2rem;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Work = styled(NavLink)`
  position: absolute;
  top: 47%;
  left: 2rem;
  transform: rotate(-90deg) translate(0%, -50%);
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
  font-weight: 600;
`

const Blog = styled(NavLink)`
  position: absolute;
  top: 47%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(0%, -50%);
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
  font-weight: 600;
`

const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
  font-weight: 600;
`

const Skills = styled(About)`
  
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: all 1s ease;

  &>:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  &>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  background-color: #000;
  transition: height .5s ease, width 1s ease .5s;
`

function Main() {
  const [YingYang, setYingYang] = useState(false)

  const handleYingYang = () => setYingYang(!YingYang)

  return (
    <MainContainer>
        <Container>
          <PowerButton/>
          <LogoComponent theme={YingYang ? "dark" : "light"}/>
          <SocialIcons theme={YingYang ? "dark" : "light"}/>

          <DarkDiv click={YingYang}/>

          <Center click={YingYang}>
            <YinYang 
              onClick={() => handleYingYang()}
              width={YingYang ? 120 : 200} 
              height={YingYang ? 120 : 200} 
              fill="currentColor"/>
            <span>Click Here</span>
          </Center>

          <ContactMsg/>

          <Work click={YingYang} to="/work">
            <motion.h2
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              initial={{
                y: -200,
                transition: {type: 'spring', duration: 1.5, delay: 1}
              }}
              animate={{
                y: 0,
                transition: {type: 'spring', duration: 1.5, delay: 1}
              }}
            >
              Work</motion.h2>
          </Work>

          <Blog to="/blog">
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
              Blog</motion.h2>
          </Blog>
          <BottomBar>
            <About to='/about' click={YingYang}>
              <motion.h2
                initial={{
                  y: 200,
                  transition: {type: 'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                  y: 0,
                  transition: {type: 'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                About</motion.h2>
            </About>
            <Skills to='/skills'>
              <motion.h2
                initial={{
                  y: 200,
                  transition: {type: 'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                  y: 0,
                  transition: {type: 'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                My Skills</motion.h2>
            </Skills>
          </BottomBar>
        </Container>
        {YingYang ? <Intro click={YingYang}/> : null}
    </MainContainer>
  )
}

export default Main

