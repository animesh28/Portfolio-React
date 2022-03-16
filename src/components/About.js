import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import aboutCover from '../assets/Images/aboutCover.png'
import { LinkedIn, Github, Whatsapp } from './AllSvgs'
import SocialIcons from '../subcomponents/SocialIcons'
import AboutTimeline from '../subcomponents/Timeline'
import { styled as styledMui } from '@mui/system'
import { Translate } from '@mui/icons-material'
import elon from '../assets/Images/elon.jpg'
import sign from '../assets/Images/signature.png'
import hey from '../assets/Images/hey.png'
import call from '../assets/Images/call.gif'
import mail from '../assets/Images/mail.gif'
import sky from '../assets/Images/sky.jpg'

const AboutWrap = styled.div`
    padding: 2.5rem;
    background: linear-gradient(to right, #000428, #004e92, #000428);
    height: 100vh;
    width: 100vw;
    position: relative;

    h1 {
        color: #fff;
    }
`

const SocialWrap = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    width: auto;

    & > * {
        width: 35px;
        height: 35px;
        margin: 0 10px;
        cursor: pointer;
    }
`

const TimelineWrap = styled.div`
    color: #ffffff;
    position: fixed;
    top: 45%;
    left: 15%;
    transform: translate(-50%, -50%);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);

    .MuiTimelineDot-root.eat, .MuiTimelineDot-root.code {
        box-shadow: 3px 3px 5px rgba(0, 0, 0, .6);
    }

    .MuiTimelineDot-root.sleep, .MuiTimelineDot-root.repeat {
        box-shadow: -3px 3px 5px rgba(0, 0, 0, .6);
    }
`

const AboutQuote = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-family: 'Satisfy', cursive;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 30vw;
    justify-content: center;
    align-items: center;
    z-index: 2;
    
    &::after {
        content: '';
        z-index: -2;
        width: 100%;
        height: 100%;
        position: absolute;
        top: -10%;
        left: 0;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background: linear-gradient(to bottom, #4db5ff, transparent);
        transition: all .5s ease-in;
    }

    &::before {
        content: '';
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 10%;
        left: 0;
        clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
        background: linear-gradient(to top, #4db5ff, transparent);
        box-shadow: 10px 20px 30px rgba(0, 0, 0, .4);
        transition: all .5s ease-in;
    }

    span {
        transition: all .5s ease-in;
    }
    
    span.space {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    span.quote {
        display: flex;
        flex: 1;

        &:first-of-type {
            margin-top: 70px;
        }

        &:last-of-type {
            position: absolute;
            bottom: 70px;
            
        }
    }

    &:hover {
        &::after, &::before {
            transform: rotate(180deg);
        }

        span.quote {
            &:first-of-type {
                margin-top: 35px;
            }

            &:last-of-type {
                bottom: 35px; 
            }
        }

        span.space {
            transform: translate(-50%, -50%) scale(.8);
        }
    }
`

const ImgFrame = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(#4db5ff, transparent);
    z-index: -1;
    border-radius: 80px;
    transform: rotate(-13deg);
    transition: transform .5s ease-in;
`

const AboutEmoji = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0 , -50%);
    margin-right: 2rem;
    z-index: 4;
    

    &:hover {
        img {
            transform: rotate(-13deg);
        }

        ${ImgFrame} {
            transform: rotate(13deg);
        }
    }

    img {
        border-radius: 80px;
        transform: rotate(13deg);
        box-shadow: 10px 20px 30px rgba(0, 0, 0, .4);
        background: linear-gradient(#4db5ff, transparent);
        transition: transform .5s ease-in;
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

const QuoteWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
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
  bottom: 2rem;
  right: 2rem;

  a {
      text-decoration: none;
      color: #fff;
      margin: 0 10px;
      position: relative;

      &:before {
          content: '';
          width: 40px;
          height: 40px;
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
          opacity: 0;
          visibility: hidden;
          transition: all .5s ease-in;
      }
      
      &:first-of-type {
        &::before {
            background: url(${call}) no-repeat white;
            background-size: 25px;
            background-position-x: center;
            background-position-y: 5px;
        }

        &:hover {
            &::before {
                opacity: 1;
                visibility: visible;
            }
        }
      }

      &:last-of-type {
        &::before {
            background: url(${mail}) no-repeat white;
            background-size: 25px;
            background-position-x: center;
            background-position-y: 5px;
        }

        &:hover {
            &::before {
                opacity: 1;
                visibility: visible;
            }
        }
      }

      

      
  }
`;

function About() {
  return (
    <AboutWrap>
        <LogoComponent/>
        <PowerButton/>
        <SocialWrap>
            <Whatsapp style={{fill: '#fff'}}/>
            <Github style={{fill: '#fff'}}/>
            <LinkedIn style={{fill: '#fff'}}/>
        </SocialWrap>
        <TimelineWrap>
            <AboutTimeline/>
        </TimelineWrap>
        <AboutQuote>
            <span className='quote'>Better Thinking</span>
            <span className='space'>is</span>
            <span className='quote'>Better Life !</span>
        </AboutQuote>
        <AboutEmoji>
            <img src={hey} alt='bitmoji'/>
            <ImgFrame></ImgFrame>
        </AboutEmoji>
        

        <AboutText>
            <QuoteWrap>
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
            </QuoteWrap>

            <ContactInfo>
                <a href='tel:+918210118679'>+91 821-011-8679</a>
                <a href='mailto:animesh.raj.om@gmail.com'>animesh.raj.om@gmail.com</a>
            </ContactInfo>
        </AboutText>
    </AboutWrap>
  )
}

export default About