import React from 'react'
import styled, {keyframes} from 'styled-components'
import { mediaQueries } from '../components/Themes'

const Card = styled.div`
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

  div.cardSide {
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

  
  
  &:hover .cardFront{
    transform: rotateY(-180deg);
  }


  &:hover .cardBack{
    transform: rotateY(0deg);
  }
`
const CardFront = styled.div`
  font-family: "Ubuntu Mono", monospace;

`

const scale = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.3);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`
const CardBack = styled.div`
    transform: rotateY(180deg);

    div.icon-row {
    display: flex;
    justify-content: space-between;
    }

    img.icon {
      width: 80px;
      background-color: rgb(240,240,240);
      padding: 10px;
      border-radius: 20px;
    }

    img.middleIcon {
      width: 70px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ${scale} 4s ease-in infinite;
    }
`

const CardImg = styled.img`
  height: 90%
`

const CardTitle = styled.div`
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

const progress = keyframes`
  0% {
    background-size:100% 0%;
  }
  100% {
    background-size:100% 100%;
  }
`

const XShape = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 7px solid white;

    span {
      position: absolute;
      top: 0;
      left: 0;
      right:0;
      bottom: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    span:nth-of-type(1) { 
      clip-path: polygon(3% 0, 0 0, 50% 50%);
      background: linear-gradient(#000,#000) left no-repeat,#ccc;
      animation: ${progress} 4s steps(10,start) infinite;
      animation-timing-function: ease-in;
    }

    span:nth-of-type(2) { 
      clip-path: polygon(97% 0, 100% 0, 50% 50%);
      background: linear-gradient(#000,#000) left no-repeat,#ccc;
      animation: ${progress} 4s steps(10,start) infinite;
      animation-timing-function: ease-in;
    }

    span:nth-of-type(3) { 
      clip-path: polygon(0 100%, 3% 100%, 50% 50%);
      background: linear-gradient(#000,#000) left no-repeat,#ccc;
      animation: ${progress} 4s steps(10,start) infinite;
      animation-timing-function: ease-in;
    }

    span:nth-of-type(4) { 
      clip-path: polygon(97% 100%, 100% 100%, 50% 50%);
      background: linear-gradient(#000,#000) left no-repeat,#ccc;
      animation: ${progress} 4s steps(10,start) infinite;
      animation-timing-function: ease-in;
    }
`

function CardComponent(props) {
    return (
        <Card>
            <CardFront className='cardSide cardFront'>
                <CardImg src={props.img}/>
                <CardTitle>
                <img src={props.logo} />
                <span>{props.skill}</span>
                </CardTitle>
            </CardFront>
            <CardBack className='cardSide cardBack'>
                <XShape>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </XShape>
                <div className='icon-row'>
                    <img src={props.icon1} className='icon'/>
                    
                    <img src={props.icon2} className="icon"/>
                </div>
                
                <img src={props.middleIcon} className='icon middleIcon'/>
                
                <div className='icon-row'>
                    <img src={props.icon3} className='icon'/>
                    <img src={props.icon4} className='icon'/>
                </div>
            </CardBack>
        </Card>
        )
    }
    
    export default CardComponent