import gsap from 'gsap'
import { Timeline, TweenLite } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect,useLayoutEffect, useRef, useState } from 'react'
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
import crazyMac from '../assets/Images/crazy-mac.png'
import crazyTab from '../assets/Images/crazy-tab.png'
import { ScrollToPlugin } from 'gsap/all';
import PowerButton from '../subcomponents/PowerButton';
import LogoComponent from '../subcomponents/LogoComponent';
import natoursBg from '../assets/Images/natours-form.png'

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;


    /*Work Page Logo Color*/
    .logo {
        color: #fff;
    }
`

const TextWrap = styled.div`
    display: flex;
    width: 50vw;
    height: 100vh;
    background: url(${natoursBg}) ,#00824d;
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: 3rem center;
    background-blend-mode: normal;
    position: static;
    z-index: 19;
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
    background: #01b769;
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
    background: #ccc;
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
    background: #b7172f;
`

const ImageWrap5 = styled(ImageWrap1)`
    position: absolute;
    top: -100vh;
    left: 0;
    opacity: 0;
    z-index: 10;
    background: #730f1d;
`


const CircleWrap = styled.div`
    height: 350px;
    width: 350px;
    border-radius: 50%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00824d;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;

  
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

const CrazyMac = styled(RudraMac)`
    
`

const CrazyTab = styled(RudraTab)`
    right: 4rem;
`

const HeadingText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;

    h1 {
        font-family: 'Dancing Script', cursive;
        font-size: 40px;        
        font-weight: 00;
        margin-bottom: 10px;
        background: linear-gradient(to right bottom, #cecece, #ccc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span {
        text-transform: capitalize;
    }
`

function Work() {
    let jmdS21Ref, jmdMacRef = useRef(null)
    let natoursGifVid, natoursImg = useRef(null)
    let rudraMacRef, rudraTabRef = useRef(null)
    let maharajaMacRef, maharajaMobRef = useRef(null)
    let crazyMacRef, crazyTabRef = useRef(null)

    useEffect(() => {

        let t1 = new Timeline({delay: 0.3})
        
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        
        // Fade Previous Slide Transition Next && Slider Animation
        t1
        .to('#img-wrap_1', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',    
            attr: {
                ['data-active']: 'hidden'
            },                
        }, 'fadeFirst')
        .to('.text-wrap', {
            duration: 3,
            background: '#003f72',
            opacity: 1,
            ease: 'ease-in',                
        }, 'secondSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#003f72',
            opacity: 1,
            ease: 'ease-in',                
        }, 'secondSlide')
        .to('#img-wrap_2', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            ease: 'ease-in',
            attr: {
                ['data-active']: 'active'
            }                 
        }, 'secondSlide')
        .to('.transrgwht', {
            duration: 3,
            strokeDasharray: "140,1000",
            ease: 'ease-in',
            onUpdate: setNatours,
        }, 'secondSlide')
        .to('.dotsfill2', {
            duration: .5,
            ease: 'ease-in',
            fill: '#0092ff',
            onUpdate: setJmd,
        },'fillDot2')
        .to('#img-wrap_2', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',    
            delay: 2,    
            attr: {
                ['data-active']: 'hidden'
            }          
        }, 'fadeSecond')
        .to('#img-wrap_3', {
            duration: 3,
            y: '100vh',
            opacity: 1,
            background: '#151247',
            ease: 'ease-in',
            attr: {
                ['data-active']: 'active'
            } 
        },'thirdSlide')
        .to('.text-wrap', {
            duration: 3,
            background: '#0f0f37',
            opacity: 1,
            ease: 'ease-in',                
        }, 'thirdSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#0f0f37',
            opacity: 1,
            ease: 'ease-in',                
        }, 'thirdSlide')
        .to('.transrgwht', {
            duration: 3,
            strokeDasharray: "280,1000",
            ease: 'ease-in',
            onUpdate: setJmd,
        }, 'thirdSlide')
        .to('.dotsfill3', {
            duration: .5,
            ease: 'ease-in',
            fill: '#0092ff',
            onUpdate: setRudra
        },'fillDot3')
        .to('#img-wrap_3', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',  
            delay: 2,   
            attr: {
                ['data-active']: 'hidden'
            }           
        }, 'fadeThird')
        .to('#img-wrap_4', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            delay: 2,
            ease: 'ease-in', 
            attr: {
                ['data-active']: 'active'
            } 
        },'fourthSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#c81933',
            opacity: 1,
            ease: 'ease-in',                
        }, 'fourthSlide')
        .to('.text-wrap', {
            duration: 3,
            background: '#c81933',
            opacity: 1,
            ease: 'ease-in',                
        }, 'fourthSlide')
        .to('.transrgwht', {
            duration: 3,
            strokeDasharray: "410,1000",
            ease: 'ease-in',
            
            onUpdate: setRudra,
        }, 'fourthSlide')
        .to('.dotsfill4', {
            duration: .5,
            ease: 'ease-in',
            fill: '#0092ff',
            onUpdate: setMaharaja
        },'fillDot4')
        .to('#img-wrap_4', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',
            attr: {
                ['data-active']: 'hidden'
            } ,
            delay: 2,                
        }, 'fadeFourth')
        .to('#img-wrap_5', {
            duration: 3,
            y: '100vh',
            opacity: 1,
            ease: 'ease-in',  
            attr: {
                ['data-active']: 'active'
            }               
        }, 'fifthSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#5d0c18',
            opacity: 1,
            ease: 'ease-in',                
        }, 'fifthSlide')
        .to('.text-wrap', {
            duration: 3,
            background: '#5d0c18',
            opacity: 1,
            ease: 'ease-in',                
        }, 'fifthSlide')
        .to('.transrgwht', {
            duration: 3,
            strokeDasharray: "540,1000",
            ease: 'ease-in',
            
            onUpdate: setMaharaja,
        }, 'fifthSlide')
        .to('.dotsfill5', {
            duration: .5,
            ease: 'ease-in',
            fill: '#0092ff',
            onUpdate: setCrazy
        },'fillDot5')
        
        const dot1 = document.querySelector('.dots-nav-1')
        dot1.addEventListener('click', (e) => {
            const pos = 0
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })
        })

        const dot2 = document.querySelector('.dots-nav-2')
        dot2.addEventListener('click', (e) => {
            const pos = Math.ceil(document.body.scrollHeight * (t1.labels.fillDot2 / t1.duration()))
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })
            
        })

        const dot3 = document.querySelector('.dots-nav-3')
        dot3.addEventListener('click', (e) => {
            const pos = Math.ceil(document.body.scrollHeight * (t1.labels.fillDot3 / t1.duration()))
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })    
        })

        const dot4 = document.querySelector('.dots-nav-4')
        dot4.addEventListener('click', (e) => {
            const pos = Math.ceil(document.body.scrollHeight * (t1.labels.fillDot4 / t1.duration()))
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })
        })

        const dot5 = document.querySelector('.dots-nav-5')
        dot5.addEventListener('click', (e) => {
            const pos = Math.ceil(document.body.scrollHeight * (t1.labels.fillDot5 / t1.duration()))
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })
        })

        ScrollTrigger.create({
            animation: t1,
            trigger: '.work-container',
            start: 'top 0%',
            end: '+=5000',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            id: 'transition'
        })

        //JMD Slide Transition   
        let t2 = new Timeline()

        t2.from(jmdS21Ref, {
            duration: 2,
            opacity: 0,
            y: '-200vh',
            ease: 'ease-in',                
        }, "anime")
        .from(jmdMacRef, {
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
            scrub: 1,
            id: 'transition1'
        })        

        //Natours Slide Transition
        
        let t3 = new Timeline()

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

        //Rudra Motors Slide Transition
        let t4 = new Timeline()

        t4.from(rudraTabRef, {
            duration: 2,
            opacity: 0,
            x: '6rem',
            ease: 'ease-in',               
        }, "anime5")
        .from(rudraMacRef, {
            duration: 2,
            opacity: 0,
            x: '-10rem',
            ease: 'ease-in',               
        }, "anime5")
        
        

        ScrollTrigger.create({
            animation: t4,
            trigger: '#img-wrap_3',
            start: 'bottom 0%',
            end: '+=3500',
            scrub: 1,
            id: 'transition2'
        })    

        //Maharaja Studios Slide Transition
        
        let t6 = new Timeline()

        t6.from(maharajaMobRef, {
            duration: 2,
            opacity: 0,
            x: '100vw',
            ease: 'ease-in',               
        }, "anime7")
        .from(maharajaMacRef, {
            duration: 2,
            opacity: 0,
            x: '-100vw',
            ease: 'ease-in',               
        }, "anime7")
        

        ScrollTrigger.create({
            animation: t6,
            trigger: '#img-wrap_4',
            start: 'top 0%',
            end: '+=4000',
            scrub: 1,
            id: 'transition3'
        })  

        // Crazy Bakery Slide Transition
        let t5 = new Timeline()

        t5.from(crazyTabRef, {
            duration: 3,
            opacity: 0,
            x: '100vw',
            y: '-100vh',
            ease: 'ease-in',               
        }, "anime8")
        .from(crazyMacRef, {
            duration: 3,
            opacity: 0,
            x: '-100vw',
            y: '100vh',
            ease: 'ease-in',               
        }, "anime8")
        

        ScrollTrigger.create({
            animation: t5,
            trigger: '#img-wrap_5',
            start: 'bottom 0%',
            end: '+=5000',
            scrub: 1,
            id: 'transition4'
        })  
    }, [])

    useLayoutEffect(() => {
        return () => {
            ScrollTrigger.getById('transition').kill()
            ScrollTrigger.getById('transition1').kill()
            ScrollTrigger.getById('transition2').kill()
            ScrollTrigger.getById('transition3').kill()
            ScrollTrigger.getById('transition4').kill()
        }
    }, [])
    const [textData, setTextData] = useState({name: 'Natours', descrip:'Exciting tours and travels'})
    const setNatours = () => setTextData({name: 'Natours', descrip: 'Exciting tours and travels'})
    const setJmd = () => setTextData({name: 'JMD Developers', descrip: 'Construction | Real Estate | Joint Venture'})
    const setRudra = () => setTextData({name: 'Rudra Motors', descrip: 'Tata Motors Dealership'})
    const setMaharaja = () => setTextData({name: 'Maharaja Studios', descrip: 'Photography | Cinematography'})
    const setCrazy = () => setTextData({name: 'Crazy Bakery', descrip: 'Bakery'})

    const cleanup = useState(false)
    
    

    
  return (
    <Container className='work-container'>
        <LogoComponent/>
        <PowerButton top='1.5rem'/>
        <TextWrap className='text-wrap'>
            
        </TextWrap>
        <ImageWrapContainer>
        <ImageWrap1 id='img-wrap_1' data-active="active">
            <NatoursVid src={NatoursGif} ref={el => natoursGifVid = el}/>
            <NatoursSnow src={NatoursImg} ref={el => natoursImg = el}/>
        </ImageWrap1>
        <ImageWrap2 id='img-wrap_2' data-active="hidden">
            <JmdMac src={jmdMac} alt="JMD-Mac" ref={el => jmdMacRef = el}/>
            <JmdS21 src={jmdS21} alt="JMD-Mac" ref={el => jmdS21Ref = el}/>
        </ImageWrap2>
        <ImageWrap3 id="img-wrap_3" data-active="hidden">
            <RudraMac src={rudraMac} ref={el => rudraMacRef = el}/>
            <RudraTab src={rudraTab} ref={el => rudraTabRef = el}/>
        </ImageWrap3>
        <ImageWrap4 id="img-wrap_4" data-active="hidden">
            <MaharajaMac src={maharajaMac} ref={el => maharajaMacRef = el}/>
            <MaharajaMob src={maharajaMob} ref={el => maharajaMobRef = el}/>
        </ImageWrap4>
        <ImageWrap5 id="img-wrap_5" data-active="hidden">
            <CrazyMac src={crazyMac} ref={el => crazyMacRef = el}/>
            <CrazyTab src={crazyTab} ref={el => crazyTabRef = el}/>
        </ImageWrap5>
        </ImageWrapContainer>
        <SvgSlider />
        <CircleWrap className='circle-wrap'>
            <HeadingText>
                <h1>{textData.name}</h1>
                <span>{textData.descrip}</span>
            </HeadingText>
        </CircleWrap>
    </Container>
    
  )
}

export default Work