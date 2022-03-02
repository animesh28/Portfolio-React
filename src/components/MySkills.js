import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import ParticleComponent from './ParticleComponent'
import { lightTheme,mediaQueries } from './Themes' 
import design from '../assets/Images/design.png'
import designLogo from '../assets/Images/designLogo.png'
import dev from '../assets/Images/dev.png'
import devLogo from '../assets/Images/devLogo.png'
import jsIcon from '../assets/Images/jsIcon.gif'
import reactIcon from '../assets/Images/reactIcon.gif'
const Box = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

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
`

const Design = styled.div`
  color: ${(props) => props.theme.text};
  background: rgba(255, 255, 255, .65);
  padding: 2rem;
  width: 26vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  border-radius: 16px;
  cursor: pointer;
  perspective: 150rem;
  -moz-perspective: 150rem;

  div.designSide {
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 16px;
  }

  

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  
  
  &:hover .designFront{
    transform: rotateY(-180deg);
  }


  &:hover .designBack{
    transform: rotateY(0deg);
  }
`
const DesignFront = styled.div`
  font-family: "Ubuntu Mono", monospace;

`
const DesignBack = styled.div`
    transform: rotateY(180deg);

    div.icon-row {
    display: flex;
    justify-content: space-between;
    }

    img.icon {
      width: 70px;
    }

    img.middleIcon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`

const Dev = styled(Design)``

const BgHeading = styled(motion.h1)`
    position: fixed;
    top: 78%;
    right: 30%;
    color: rgba(0, 0, 0, 0.1);
    font-size: calc(5rem + 5vw);
    z-index: 0;
`

const DesignImg = styled.img`
  height: 90%
`

const DevImg = styled(DesignImg)`
  
`

const DesignTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  img {
    width: 50px;
  }

  span {
    font-size: 25px;
    margin-left: 13px;
  }
`

const DevTitle = styled(DesignTitle)``

const IconLicense = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .65);
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  cursor: pointer;

  img{
    max-height: 100%;
  }

  div {
    position: fixed;
    bottom: 1rem;
    right: 8rem;
    background-color: rgba(0, 0, 0, .65);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transition: all .4s ease-in;
    font-size: 8px;

    &::after{
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      right: -35px;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, .65);
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }

    a{
      text-decoration: none;
      color: #fff;
      margin: 5px 0;
    }
  }
`



function MySkills() {

  const [questionMark, setQuestionMark] = useState(null)
  const license = useRef(null)

  useEffect(() => {
    if(questionMark != null) {
      const license = document.querySelector('#license')
      if(questionMark) {
        license.style.visibility = 'visible'
        license.style.opacity = 1
      } else {
        license.style.visibility = 'hidden'
        license.style.opacity = 0
      }
    }
  }, [questionMark])
  



  return (
    <ThemeProvider theme={lightTheme}>
        <Box>
          <IconLicense>
            <div 
              id='license'
              onMouseOver={() => setQuestionMark(true)}
              onMouseOut={() => setQuestionMark(false)}
              >
              <a target="_blank" href="https://icons8.com/icon/5FzppYj4UHs3/color">Color icon by Icons8</a>
              <a target="_blank" href="https://icons8.com/icon/42472/question-mark">Question Mark icon by Icons8</a>
              <a target="_blank" href="https://icons8.com/icon/oR579SiWPF2c/coding">Coding icon by Icons8</a>
              <a href="https://icons8.com/icon/KMNIRDqAfaOt/html">Html icon by Icons8</a>
              <a href="https://icons8.com/icon/cSmDCyXt8hcT/css">Css icon by Icons8</a>
              <a href="https://icons8.com/icon/hKrJAdwqbGgG/javascript">JavaScript icon by Icons8</a>
              <a href="https://icons8.com/icon/YYYhFVbH4vFv/react-native">React Native icon by Icons8</a>
              <a href="https://icons8.com/icon/QeAlg41wwUkb/design">Design icon by Icons8</a>
            </div>
            <img 
              src="https://img.icons8.com/dotty/80/000000/question-mark.png" 
              onMouseOver={() => setQuestionMark(true)}
              onMouseOut={() => setQuestionMark(false)}
              />
          </IconLicense>
          <LogoComponent/>
          <PowerButton/>
          <ParticleComponent theme='light'/>
            <Design>
              <DesignFront className='designSide designFront'>
                <DesignImg src={design}/>
                <DesignTitle>
                  <img src={designLogo} />
                  <span>Web Design</span>
                </DesignTitle>
              </DesignFront>
              <DesignBack className='designSide designBack'>
                <div className='icon-row'>
                  <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-html-programming-and-coding-flatart-icons-outline-flatarticons-4.png" className='icon'/>

                  <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-css-programming-and-coding-flatart-icons-outline-flatarticons.png" className="icon"/>
                </div>

                <img src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/000000/external-design-design-thinking2-sbts2018-mixed-sbts2018-5.png" className='icon middleIcon'/>

                <div className='icon-row'>
                  <img src={jsIcon} className='icon'/>
                  <img src={reactIcon} className='icon'/>
                </div>
              </DesignBack>
            </Design>
            
            <Dev>
              <DevImg src={dev}/>

              <DesignTitle>
                  <img src={devLogo} />
                  <span>Web Development</span>
                </DesignTitle>
            </Dev>
            <BgHeading
              initial={{y: '150px'}}
              animate={{y: '0'}}
              transition={{type: 'spring', duration: 3}}
            >Skills</BgHeading>
        </Box>
    </ThemeProvider>
  )
}

export default MySkills