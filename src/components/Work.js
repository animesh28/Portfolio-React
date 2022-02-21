import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SvgSlider from '../subcomponents/SvgSlider'
import rudraTab from '../assets/Images/rudra-tab.png'
import rudraMac from '../assets/Images/rudra-mac.png'
import NatoursGif from '../assets/Images/natours-vid.gif'
import NatoursImg from '../assets/Images/natours-ip.png'
import jmdMac from '../assets/Images/jmd-mac.png'
import jmdS21 from '../assets/Images/jmd-s21.png'
import maharajaMac from '../assets/Images/maharaja-mac.png'
import maharajaMob from '../assets/Images/maharaja-ip.png'

const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;
`

const TextWrap = styled.div`
    display: flex;
    width: 50vw;
    height: 100vh;
    background: #6013A6;
    position: static;
    z-index: 9;
    box-shadow: inset 2rem -2rem 4rem rgba(0,0,0,.3);
`

const ImageWrapContainer = styled.div`
    position: relative;
    width: 50vw;
    height: 100vh;
`

const ImageWrap1 = styled.div`
    display: flex;
    width: 50vw;
    height: 100vh;
    background-color: orange;
    background: #fff;
    box-shadow: inset -2rem -2rem 4rem rgba(0,0,0,.3);
    position:relative;
    z-index: 1;
`

const ImageWrap2 = styled(ImageWrap1)`
    position: absolute;
    top: 100vh;
    left:0;
    opacity: 0;
    z-index: 2;
`
const ImageWrap3 = styled(ImageWrap1)`
    position: absolute;
    top: -100vh;
    left:0;
    opacity: 0;
    z-index: 5;
`
const ImageWrap4 = styled(ImageWrap1)`
    position: absolute;
    top: 100vh;
    left: 0;
    opacity: 0;
    z-index: 8;
`

const CircleWrap = styled.div`
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #6013A6;
    z-index: 10;

    img {
        position: relative;
        z-index: 10;
    }
`

const NatoursVid = styled.img`
    width: 30%;
    height: 65%;
    position: absolute;
    top: 2vh;
    right: 4rem;
`

const NatoursSnow = styled.img`
    width: 30%;
    height: 65%;
    position: absolute;
    bottom: 2vh;
    left: 12rem;
    z-index: 3;
`

const JmdMac = styled.img`
    height: 50vh;
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    z-index: 4;
`

const JmdS21 = styled.img`
    height: 57vh;
    position: absolute;
    top: 1rem;
    left: 28rem;
`

const RudraMac = styled.img`
    height: 50vh;
    position: absolute;
    bottom: 1rem;
    right: 5rem;
    z-index: 4;
`

const RudraTab = styled.img`
    height: 50vh;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 3;
`

const MaharajaMob = styled.img`
    height: 57vh;
    position: absolute;
    top: 2rem;
    left: 28rem;
`

const MaharajaMac = styled.img`
    height: 50vh;
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    z-index: 4;
`

function Work() {
    let natoursGifVid = useRef(null)
    let natoursImg = useRef(null)
    let rudraMacRef = useRef(null)
    let rudraTabRef = useRef(null)
    let maharajaMacRef = useRef(null)
    let maharajaMobRef = useRef(null)
    

    useEffect(() => {
        let t1 = new Timeline({delay: 0.3})
        
        gsap.registerPlugin(ScrollTrigger);

        

        t1.to('#img-wrap_2', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            ease: 'ease-in',                
        })
        .to('#img-wrap_3', {
            duration: 3,
            y: '100vh',
            opacity: 1,
            delay: 2,
            ease: 'ease-in',
        })
        .to('#img-wrap_4', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            delay: 2,
            ease: 'ease-in', 
        })

        ScrollTrigger.create({
            animation: t1,
            trigger: '.work-container',
            start: 'top 0%',
            end: '+=4000',
            scrub: true,
            pin: true,
            anticipatePin: 1,
        })

            
            
    }, [])

    useEffect(() => {
        let t2 = new Timeline()
        
        gsap.registerPlugin(ScrollTrigger);

        t2.from('.jmdS21', {
            duration: 2,
            opacity: 0,
            y: '-200vh',
            ease: 'ease-in',                
        }, "anime")
        .from('.jmdMac', {
            duration: 2,
            opacity: 0,
            y: '140vh',
            ease: 'ease-in',                
        }, "anime")

        ScrollTrigger.create({
            animation: t2,
            trigger: '#img-wrap_1',
            start: 'top 0%',
            end: 'bottom 0%',
            scrub: true
        })     
    }, [])

    useEffect(() => {
        let t3 = new Timeline()
        
        gsap.registerPlugin(ScrollTrigger);

        t3
        .from(natoursGifVid, {
            duration: 2,
            opacity: 0,
            y: '-100vh',
            ease: 'ease-in',                
        }, "anime2")
        .from(natoursImg, {
            duration: 2,
            opacity: 0,
            y: '140vh',
            ease: 'ease-in',                
        }, "anime2")   
    }, [])

    useEffect(() => {
        let t4 = new Timeline()
        
        gsap.registerPlugin(ScrollTrigger);

        t4.from(rudraTabRef, {
            duration: 2,
            opacity: 0,
            x: '100vw',
            ease: 'ease-in',               
        }, "anime5")
        .from(rudraMacRef, {
            duration: 2,
            opacity: 0,
            x: '-100vw',
            ease: 'ease-in',               
        }, "anime5")
        

        ScrollTrigger.create({
            animation: t4,
            trigger: '#img-wrap_2',
            start: 'bottom 0%',
            end: 'bottom -100%',
            scrub: true,
        })    
        
        let t5 = new Timeline()
        
        gsap.registerPlugin(ScrollTrigger);

        t5.from(maharajaMobRef, {
            duration: 2,
            opacity: 0,
            y: '-200vh',
            ease: 'ease-in',               
        }, "anime7")
        .from(maharajaMacRef, {
            duration: 2,
            opacity: 0,
            x: '-200vw',
            ease: 'ease-in',               
        }, "anime7")
        

        ScrollTrigger.create({
            animation: t5,
            trigger: '#img-wrap_3',
            start: 'bottom 0%',
            end: '+=4200',
            scrub: true,
        })  
    }, [])

    useEffect(() => {
           
    }, [])
    
  return (
    <Container className='work-container'>
        <TextWrap>

        </TextWrap>
        <ImageWrapContainer>
        <ImageWrap1 id='img-wrap_1'>
            <NatoursVid src={NatoursGif} className='natoursGif' ref={el => natoursGifVid = el}/>
            <NatoursSnow src={NatoursImg} ref={el => natoursImg = el} className='natoursImg'/>
        </ImageWrap1>
        <ImageWrap2 id='img-wrap_2'>
            <JmdMac src={jmdMac} alt="JMD-Mac" className='jmdMac'/>
            <JmdS21 src={jmdS21} alt="JMD-Mac" className='jmdS21'/>
        </ImageWrap2>
        <ImageWrap3 id="img-wrap_3">
            <RudraMac src={rudraMac} ref={el => rudraMacRef = el}/>
            <RudraTab src={rudraTab} ref={el => rudraTabRef = el}/>
        </ImageWrap3>
        <ImageWrap4 id="img-wrap_4">
            <MaharajaMac src={maharajaMac} ref={el => maharajaMacRef = el} className='maharajaMacRef'/>
            <MaharajaMob src={maharajaMob} ref={el => maharajaMobRef = el}/>
        </ImageWrap4>
        </ImageWrapContainer>
        <CircleWrap>
            <SvgSlider/>
        </CircleWrap>
    </Container>
    
  )
}

export default Work