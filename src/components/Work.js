import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import SvgSlider from '../subcomponents/SvgSlider'

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
    z-index: 1;
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
    background: #f00;
    position: absolute;
    top: 100vh;
    left:0;
    z-index: 2;
`
const ImageWrap3 = styled(ImageWrap1)`background: #0f0;
    position: absolute;
    top: -100vh;
    left:0;
    z-index: 3;
`
const ImageWrap4 = styled(ImageWrap1)`background: #00f;
    position: absolute;
    top: 100vh;
    left: 0;
    z-index: 4;
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
    z-index: 6;

    img {
        position: relative;
        z-index: 6;
    }
`

function Work() {

    useEffect(() => {
        let t1 = new Timeline({delay: 0.3})
        gsap.registerPlugin(ScrollTrigger);

        t1.to('#img-wrap_2', {
            duration: 3,
            y: '-100vh',
            ease: 'ease-in',                
        })
        .to('#img-wrap_3', {
            duration: 3,
            y: '100vh',
            ease: 'ease-in',
        })
        .to('#img-wrap_4', {
            duration: 3,
            y: '-100vh',
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
    

  return (
    <Container className='work-container'>
        <TextWrap>

        </TextWrap>
        <ImageWrapContainer>
        <ImageWrap1 id='img-wrap_1'>

        </ImageWrap1>
        <ImageWrap2 id='img-wrap_2'>

        </ImageWrap2>
        <ImageWrap3 id="img-wrap_3">

        </ImageWrap3>
        <ImageWrap4 id="img-wrap_4">

        </ImageWrap4>
        </ImageWrapContainer>
        <CircleWrap>
            <SvgSlider/>
        </CircleWrap>
    </Container>
    
  )
}

export default Work