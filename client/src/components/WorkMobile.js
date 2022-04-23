import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
const Mobile = styled.div`
    height: 100vh;
    background: rgba(213,215,222,.65);
    display: flex;
    align-items: center;
    justify-content: center;
`

function WorkMobile() {
  return (
    <Container>
        <PowerButton/>
        <LogoComponent/>
        <Mobile>
        <OwlCarousel className='owl-theme' loop margin={10}>
            <div class='item'>
                <h4>1</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>
            <div class='item'>
                <h4>3</h4>
            </div>
            <div class='item'>
                <h4>4</h4>
            </div>
            <div class='item'>
                <h4>5</h4>
            </div>
            <div class='item'>
                <h4>6</h4>
            </div>
            <div class='item'>
                <h4>7</h4>
            </div>
            <div class='item'>
                <h4>8</h4>
            </div>
            <div class='item'>
                <h4>9</h4>
            </div>
            <div class='item'>
                <h4>10</h4>
            </div>
            <div class='item'>
                <h4>11</h4>
            </div>
            <div class='item'>
                <h4>12</h4>
            </div>
        </OwlCarousel>
        </Mobile>
    </Container>
  )
}

export default WorkMobile