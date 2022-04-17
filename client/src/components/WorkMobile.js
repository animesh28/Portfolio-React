import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
const Mobile = styled.div`
    height: 100vh;
    background: rgba(213,215,222,.65);

    span.bubble {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        &:nth-of-type(1) {
            position: absolute;
            top: 2rem;
            right: 1rem;
            background-color: rgba(249, 204, 52,.65);
        }

        &:nth-of-type(2) {
            position: absolute;
            top: 35vh;
            left: 25vw;
            background-color: rgba(112, 238, 148, .65);
        }

        &:nth-of-type(3) {
            position: absolute;
            top: 75vh;
            left: 40vw;
            background-color: rgba(255, 116, 86, .65);
        }
        
        &:nth-of-type(4) {
            position: absolute;
            top: 45vh;
            right: 15vw;
            background-color: rgba(143, 83, 252, .65);
        }
    }

`

function WorkMobile() {
  return (
    <Container>
        <PowerButton/>
        <LogoComponent/>
        <Mobile>
            <span className='bubble'></span>
            <span className='bubble'></span>
            <span className='bubble'></span>
            <span className='bubble'></span>
        </Mobile>
    </Container>
  )
}

export default WorkMobile