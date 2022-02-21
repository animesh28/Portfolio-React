import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { motion } from 'framer-motion'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    & > *:not(:last-child) {
        margin: .5rem 0;
    }

    & > div > a > svg {
        filter: ${(props) => (props.click ? "drop-shadow(0 0 4px rgba(0,0,0,.5))" : "none")};
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};
    box-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
`

function SocialIcons(props) {
  return (
    <Icons
        click={props.click}
    >
        <motion.div
            initial={{
                transform: 'scale(0)'
            }}
            animate= {{
                scale:[0,1,1.5,1]
            }}
            transition={{
                type: 'spring',
                duration: 1,
                delay: 1
            }}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div
            initial={{
                transform: 'scale(0)'
            }}
            animate= {{
                scale:[0,1,1.5,1]
            }}
            transition={{
                type: 'spring',
                duration: 1,
                delay: 1.2
            }}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div
            initial={{
                transform: 'scale(0)'
            }}
            animate= {{
                scale:[0,1,1.5,1]
            }}
            transition={{
                type: 'spring',
                duration: 1,
                delay: 1.4
            }}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div
            initial={{
                transform: 'scale(0)'
            }}
            animate= {{
                scale:[0,1,1.5,1]
            }}
            transition={{
                type: 'spring',
                duration: 1,
                delay: 1.6
            }}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </motion.div>
        <Line
            initial={{
                height: 0
            }}
            animate={{
                height: '8rem'
            }}
            transition={{
                type: 'spring', duration: 1, delay: .8
            }}
            color={props.theme}
            click={props.click}
            />
    </Icons>
  )
}

export default SocialIcons
