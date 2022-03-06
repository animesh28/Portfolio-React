import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import aboutCover from '../assets/Images/aboutCover.png'
import { Facebook, Github } from './AllSvgs'
import SocialIcons from '../subcomponents/SocialIcons'
import AboutTimeline from '../subcomponents/Timeline'
import { styled as styledMui } from '@mui/system'
import { Translate } from '@mui/icons-material'
import elon from '../assets/Images/elon.jpg'
import sign from '../assets/Images/signature.png'

const AboutWrap = styled.div`
    padding: 2.5rem;
    background-color: #3e416b;
    height: 100vh;
    width: 100vw;
    position: relative;

    h1 {
        color: #fff;
    }
`

const Cloud = styled.div`
    position: absolute;
    top: 20vh;
    right: 0;
    height: 60vh;
    width: 45vw;
    clip-path: ellipse(41% 50% at 50% 50%);
    background: url(${aboutCover}) white no-repeat;
    z-index: 6;
    background-size: 60%;
    background-position-x: 70%;
    background-position-y: center;
`

const UpperBubble = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 27vw;
    height: 80vh;
    border-top-left-radius: 40%;
    border-bottom-left-radius: 5rem;
    background: #fff;
    z-index: 5;
    
`
const SocialWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
      margin: 10px;
  }
`

const TimelineWrap = styled.div`
    color: #ffffff;
    position: fixed;
    top: 45%;
    left: 15%;
    transform: translate(-50%, -50%);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);

    .MuiTimelineDot-root {
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
    }
`

const AboutQuote = styled.h1`
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-family: 'Satisfy', cursive;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
    
    span {
        display: block;
        height: 20px;
        width: 100%;
    }
`

const AboutText = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20vh;
    width: 100vw;
    display: flex;
    color: #fff;
    justify-content:center;
    align-items: center;

    span.quote {
        margin: 0 15px;
        display: flex;
        flex-direction:column ;

        img.sign {
            width: 100px;
            margin-top: 10px;
        }
    }
`

const QuoteName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  text-transform: uppercase;

  h3 {
      font-size: 17px;
  }

  span {
    text-transform: capitalize;
    font-size: 14px;
    margin-top: 5px;
    color: #8182b2;
  }
`;

const QuoteImg = styled.img`
float: left;
  width: 80px;
  height: 80px;
  clip-path: circle(50%);
  shape-outside: circle(50%);
`;

const ContactInfo = styled.div`
  display: flex;
  position: absolute;
  right: 2rem;

  a {
      text-decoration: none;
      color: #fff;
      margin: 0 10px;
  }
`;

function About() {
  return (
    <AboutWrap>
        <LogoComponent/>
        <PowerButton/>
        <TimelineWrap>
            <AboutTimeline/>
        </TimelineWrap>
        <AboutQuote>
            Better Thinking<span></span>is Better Life !
        </AboutQuote>
        <UpperBubble>
            
        </UpperBubble>
        <Cloud>
            
        </Cloud>

        <AboutText>
            <QuoteName>
                <h3>Elon Musk</h3>
                <span>you know him</span>
            </QuoteName>
            <QuoteImg src={elon}/>
            <span className='quote'>
                When something is important enough,<br></br> 
                you do it even if the odds are not in your favor.
                <img src={sign} className='sign'/>
            </span>

            <ContactInfo>
                <a href='tel:+918210118679'>+91 821-011-8679</a>
                <a href='mailto:animesh.raj.om@gmail.com'>animesh.raj.om@gmail.com</a>
            </ContactInfo>
        </AboutText>
    </AboutWrap>
  )
}

export default About