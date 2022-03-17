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
import disneyMac from '../assets/Images/disney-mac.gif'
import disneyMacLogin from '../assets/Images/disneyLogin-mac.png'
import disneyMob from '../assets/Images/disney-mobile.png'
import rudraText from '../assets/Images/rudra-text.png'
import maharajaText from '../assets/Images/maharaja-text.gif'
import crazyText from '../assets/Images/crazy-text.png'
import jmdText from '../assets/Images/jmd-text.png'
import teslaMac from '../assets/Images/tesla-mac.png'
import teslaTab from '../assets/Images/tesla-tab.png'
import teslaText from '../assets/Images/tesla-text.png'
import LinkIcon from '@mui/icons-material/Link'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

function Work() {
    let jmdS21Ref, jmdMacRef = useRef(null)
    let natoursGifVid, natoursImg = useRef(null)
    let rudraMacRef, rudraTabRef = useRef(null)
    let maharajaMacRef, maharajaMobRef = useRef(null)
    let crazyMacRef, crazyTabRef = useRef(null)
    let disneyMacRef, disneyMobRef = useRef(null)
    let teslaMacRef, teslaTabRef = useRef(null)

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
        }, 'fadeFirst')
        .to('.text-wrap', {
            duration: 3,
            opacity: 1,
            background: '#090b13',
            ease: 'ease-in',             
        }, 'secondSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#090b13',
            opacity: 1,
            ease: 'ease-in',                
        }, 'secondSlide')
        .to('#img-wrap_2', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            ease: 'ease-in',                 
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
            onUpdate: setDisney,
        },'fillDot2')
        .to('#img-wrap_2', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',    
            delay: 2,           
        }, 'fadeSecond')
        .to('#img-wrap_3', {
            duration: 3,
            y: '100vh',
            opacity: 1,
            ease: 'ease-in', 
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
            onUpdate: setDisney,
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
        }, 'fadeThird')
        .to('#img-wrap_4', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            ease: 'ease-in',  
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
            delay: 2,                
        }, 'fadeFourth')
        .to('#img-wrap_5', {
            duration: 3,
            y: '100vh',
            opacity: 1,
            ease: 'ease-in',                 
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
        .to('#img-wrap_5', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',
            delay: 3,                
        }, 'fadeFifth')
        .to('#img-wrap_6', {
            duration: 3,
            y: '-100vh',
            opacity: 1,
            ease: 'ease-in',                 
        }, 'sixthSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#101827',
            opacity: 1,
            ease: 'ease-in',                
        }, 'sixthSlide')
        .to('.text-wrap', {
            duration: 3,
            background: '#101827',
            opacity: 1,
            ease: 'ease-in',                
        }, 'sixthSlide')
        .to('.transrgwht', {
            duration: 3,
            strokeDasharray: "680,1000",
            ease: 'ease-in',
            
            onUpdate: setCrazy,
        }, 'sixthSlide')
        .to('.dotsfill6', {
            duration: .5,
            ease: 'ease-in',
            fill: '#0092ff',
            onUpdate: setJmd
        },'fillDot6')
        .to('#img-wrap_6', {
            duration: .5,
            opacity: 0,
            ease: 'ease-in',
            delay: 3,                
        }, 'fadeSixth')
        .to('#img-wrap_7', {
            duration: 3,
            y: '100vh',
            opacity: 1,
            ease: 'ease-in',                 
        }, 'seventhSlide')
        .to('.circle-wrap', {
            duration: 3,
            background: '#821F1B',
            opacity: 1,
            ease: 'ease-in',          
        }, 'seventhSlide')
        .to('.text-wrap', {
            duration: 3,
            background: '#821F1B',
            opacity: 1,
            ease: 'ease-in',                
        }, 'seventhSlide')
        .to('.transrgwht', {
            duration: 3,
            strokeDasharray: "850,1000",
            ease: 'ease-in',
            onUpdate: setJmd,
        }, 'seventhSlide')
        .to('.dotsfill7', {
            duration: .5,
            ease: 'ease-in',
            fill: '#0092ff',
            onUpdate: setTesla
        },'fillDot7')

        ScrollTrigger.create({
            animation: t1,
            trigger: '.work-container',
            start: 'top 0%',
            end: '+=7000',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            id: 'transition'
        })
        
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

        const dot6 = document.querySelector('.dots-nav-6')
        dot6.addEventListener('click', (e) => {
            const pos = Math.ceil(document.body.scrollHeight * (t1.labels.fillDot6 / t1.duration()))
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })
        })

        const dot7 = document.querySelector('.dots-nav-7')
        dot7.addEventListener('click', (e) => {
            const pos = Math.ceil(document.body.scrollHeight * (t1.labels.fillDot7 / t1.duration()))
            gsap.to(window, { duration: 3, scrollTo: pos, ease: 'linear' })
        })

        

        //JMD Slide Transition   
        let t2 = new Timeline()

        t2.from(disneyMobRef, {
            duration: 2,
            opacity: 0,
            y: '-200vh',
            ease: 'ease-in',                
        }, "anime")
        .from(disneyMacRef, {
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
        }, "anime3")
        .from(rudraMacRef, {
            duration: 2,
            opacity: 0,
            x: '-10rem',
            ease: 'ease-in',               
        }, "anime3")
        
        

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
            x: '40vw',
            ease: 'ease-in',               
        }, "anime4")
        .from(maharajaMacRef, {
            duration: 2,
            opacity: 0,
            x: '-40vw',
            ease: 'ease-in',               
        }, "anime4")
        

        ScrollTrigger.create({
            animation: t6,
            trigger: '#img-wrap_4',
            start: 'top 0%',
            end: '+=4200',
            scrub: 1,
            id: 'transition3'
        })  

        // Crazy Bakery Slide Transition
        let t5 = new Timeline()

        t5.from(crazyTabRef, {
            duration: 3,
            opacity: 0,
            x: '40vw',
            y: '-40vh',
            ease: 'ease-in',               
        }, "anime5")
        .from(crazyMacRef, {
            duration: 3,
            opacity: 0,
            x: '-40vw',
            y: '40vh',
            ease: 'ease-in',               
        }, "anime5")

        ScrollTrigger.create({
            animation: t5,
            trigger: '#img-wrap_5',
            start: 'bottom 0%',
            end: '+=5000',
            scrub: 1,
            id: 'transition4'
        })  

        let t7 = new Timeline()

        t7.from(jmdS21Ref, {
            duration: 2,
            opacity: 0,
            y: '-200vh',
            ease: 'ease-in',
        }, "anime6")
        .from(jmdMacRef, {
            duration: 2,
            opacity: 0,
            y: '240vh',
            ease: 'ease-in',                
        }, "anime6")
        

        ScrollTrigger.create({
            animation: t7,
            trigger: '#img-wrap_6',
            start: 'top 0%',
            end: '+=5500',
            scrub: 1,
            id: 'transition5',
        })  

        let t8 = new Timeline()

        t8.from(teslaTabRef, {
            duration: 2,
            opacity: 0,
            x: '400vw',
            ease: 'ease-in',
        }, "anime7")
        .from(teslaMacRef, {
            duration: 2,
            opacity: 0,
            x: '-400vw',
            ease: 'ease-in',                
        }, "anime7")
        

        ScrollTrigger.create({
            animation: t8,
            trigger: '#img-wrap_7',
            start: 'bottom 0%',
            end: '+=7000',
            scrub: 1,
            id: 'transition6',
        })  
    }, [])

    useLayoutEffect(() => {
        return () => {
            ScrollTrigger.getById('transition').kill()
            ScrollTrigger.getById('transition1').kill()
            ScrollTrigger.getById('transition2').kill()
            ScrollTrigger.getById('transition3').kill()
            ScrollTrigger.getById('transition4').kill()
            ScrollTrigger.getById('transition5').kill()
            ScrollTrigger.getById('transition6').kill()
        }
    }, [])
    const [textData, setTextData] = useState({name: 'Natours', descrip:'Exciting tours and travels', url: 'https://animesh28.github.io/Natours/'})
    const setNatours = () => {
        setTextData({name: 'Natours', descrip: 'Exciting tours and travels', url: 'https://animesh28.github.io/Natours/'})
        document.querySelector('#text-wrap_img').src = natoursBg
    }
    const setDisney = () => {
        setTextData({name: 'Disney+ Clone', descrip: 'OTT Platform', url: 'https://disneyplus-clone-fe126.web.app/'})
        document.querySelector('#text-wrap_img').src = disneyMacLogin
    }
    const setJmd = () => {
        document.querySelector('#text-wrap_img').src = jmdText
        setTextData({name: 'JMD Developers', descrip: 'Construction | Real Estate | Joint Venture', url: 'https://jmddevelopers.com/'})
    }
    const setRudra = () => {
        document.querySelector('#text-wrap_img').src = rudraText
        setTextData({name: 'Rudra Motors', descrip: 'Tata Motors Dealership', url: 'https://rudramotor.com/'})
    }
    const setMaharaja = () => {
        document.querySelector('#text-wrap_img').src = maharajaText
        setTextData({name: 'Maharaja Studios', descrip: 'Photography | Cinematography', url: 'https://maharaja-studios.netlify.app/'})
    }
    const setCrazy = () => {
        document.querySelector('#text-wrap_img').src = crazyText
        setTextData({name: 'Crazy Bakery', descrip: 'Bakery', url: 'https://crazybakery.in/'})
    }
    const setTesla = () => {
        document.querySelector('#text-wrap_img').src = teslaText
        setTextData({name: 'Tesla Clone', descrip: 'Electric Cars | Solar Panels', url: 'https://animesh-tesla-clone.netlify.app/'})
    }

  return (
    <Container className='work-container'>
        
        <LogoComponent/>
        <PowerButton top='1.5rem'/>
        <TextWrap className='text-wrap'>
            <img src={natoursBg} alt='img-text-wrap' id='text-wrap_img'/>
            <Info className='info'>
                

                <QuestionMarkIcon 
                    style={{
                        marginRight: '3rem',
                        background: '#fff',
                        borderRadius: '50%',
                        padding: '5px',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer'
                    }}
                    className='question'
                />
                <a href={textData.url} target="_blank" className='live-link'><LinkIcon/><span></span>{textData.url}</a>
            </Info>
        </TextWrap>
        <ImageWrapContainer>
        <ImageWrap1 id='img-wrap_1'>
            <NatoursVid src={NatoursGif} ref={el => natoursGifVid = el}/>
            <NatoursSnow src={NatoursImg} ref={el => natoursImg = el}/>
        </ImageWrap1>
        <ImageWrap2 id='img-wrap_2'>
            <DisneyMac src={disneyMac} alt="Disney-Mac" ref={el => disneyMacRef = el}/>
            <DisneyMob src={disneyMob} alt="Disney-Mob" ref={el => disneyMobRef = el}/>
        </ImageWrap2>
        <ImageWrap3 id="img-wrap_3">
            <RudraMac src={rudraMac} ref={el => rudraMacRef = el}/>
            <RudraTab src={rudraTab} ref={el => rudraTabRef = el}/>
        </ImageWrap3>
        <ImageWrap4 id="img-wrap_4">
            <MaharajaMac src={maharajaMac} ref={el => maharajaMacRef = el}/>
            <MaharajaMob src={maharajaMob} ref={el => maharajaMobRef = el}/>
        </ImageWrap4>
        <ImageWrap5 id="img-wrap_5">
            <CrazyMac src={crazyMac} ref={el => crazyMacRef = el}/>
            <CrazyTab src={crazyTab} ref={el => crazyTabRef = el}/>
        </ImageWrap5>
        <ImageWrap6 id="img-wrap_6">
            <JmdMac src={jmdMac} alt="JMD-Mac" ref={el => jmdMacRef = el}/>
            <JmdS21 src={jmdS21} alt="JMD-Mac" ref={el => jmdS21Ref = el}/>
        </ImageWrap6>

        <ImageWrap7 id="img-wrap_7">
            <TeslaMac src={teslaMac} alt="Tesla-Mac" ref={el => teslaMacRef = el}/>
            <TeslaTab src={teslaTab} alt="Tesla-tab" ref={el => teslaTabRef = el}/>
        </ImageWrap7>
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
    background: #00824d;
    z-index: 19;
    box-shadow: inset 2rem -2rem 4rem rgba(0,0,0,.3);
    position: relative;

    img {
        height: 45%;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
    }
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
    background: linear-gradient(to left , #7ed56f, #28b485, #00824d);
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
    background: linear-gradient(to right bottom, #03040D, #292C3C, #03040D);
`
const ImageWrap3 = styled(ImageWrap1)`
    position: absolute;
    top: -100vh;
    left:0;
    opacity: 0;
    z-index: 5;
    background: linear-gradient(to bottom right, #0C1C66, #6284FC);
`
const ImageWrap4 = styled(ImageWrap1)`
    position: absolute;
    top: 100vh;
    left: 0;
    opacity: 0;
    z-index: 8;
    background: linear-gradient(to top left, #FF177C, #AA2820);
`

const ImageWrap5 = styled(ImageWrap1)`
    position: absolute;
    top: -100vh;
    left: 0;
    opacity: 0;
    z-index: 10;
    background: linear-gradient(to left, #333333, #dd1818);
`

const ImageWrap6 = styled(ImageWrap1)`
    position: absolute;
    top: 100vh;
    left: 0;
    opacity: 0;
    z-index: 12;
    background: linear-gradient(to right, #141e30, #243b55);
`

const ImageWrap7 = styled(ImageWrap1)`
    position: absolute;
    top: -100vh;
    left: 0;
    opacity: 0;
    z-index: 14;
    background: linear-gradient(to right bottom, #b92b27, #1565c0);
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

const DisneyMac = styled(JmdMac)``
const DisneyMob = styled(JmdS21)``

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

const TeslaMac = styled(RudraMac)``

const TeslaTab = styled(RudraTab)``

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

const Info = styled.div`
    position: absolute;
    bottom: 3rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        margin-left: 2rem;
        transition: all .4s ease;
        background: rgba(0, 0, 0, .5);
        padding: 15px 20px;
        border-radius: 20px;

        span {
            width: 10px;
        }

        &:hover {
            color: #000;
            background: rgba(255, 255, 255, .5);
        }

        &:before {
            content: 'Click on grey dots to traverse smoothly!';
            position: absolute;
            top: -7vh;
            right: 10px;
            width: 40%;
            height: 100%;
            background: rgba(255, 255, 255, .5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            border-radius: 25px;
            opacity: 0;
            visibility: hidden;
            transition: all .4s ease-in;
        }
    }

    & > .question:hover {
        & ~ .live-link:before {
            opacity: 1;
            visibility: visible;
        }
    }
`

export default Work