import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'

function PowerButton() {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor"/>
      </NavLink>
    </Power>

  )
}

export default PowerButton

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%,0);
  background-color: #FCF6F4;
  width: 2.5rem;
  height: 2.5rem;
  padding: .3rem;
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease-in;
  z-index: 30;

  &:hover {
    background: rgba(0, 255, 0, .4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, .2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`