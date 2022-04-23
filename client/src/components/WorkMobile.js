import React, { useState } from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Natours1 from '../assets/Images/natours-ip.png'
import Natours2 from '../assets/Images/natours-vid.gif'
import disney1 from '../assets/Images/disney-mac.gif'
import disney2 from '../assets/Images/disney-mobile.png'
import jmdMac from '../assets/Images/jmd-mac.png'
import jmdS21 from '../assets/Images/jmd-s21.png'
import rudraTab from '../assets/Images/rudra-tab.png'
import rudraMac from '../assets/Images/rudra-mac.png'
import rudraText from '../assets/Images/rudra-text.png'


const Container = styled.div`
    width: 100vw;
    height: 100vh;

    .logo {
        color: #fff;
    }
`
const Mobile = styled.div`
    height: 100vh;
    background: rgba(213,215,222,.65);

    .owl-theme {
        .item {
            .image {
                height: 60vh;
                width: 100vw;
                background: linear-gradient(to left, rgb(126, 213, 111), rgb(40, 180, 133), rgb(0, 130, 77));
                -webkit-box-shadow: inset 0px -9px 20px 3px rgba(0,0,0,0.75);
                -moz-box-shadow: inset 0px -9px 20px 3px rgba(0,0,0,0.75);
                box-shadow: inset 0px -9px 20px 3px rgba(0,0,0,0.75);
                display: flex;
                justify-content: space-around;
                position: relative;
                overflow: hidden;


                .col-img {
                    height: 40vh;
                    width: auto;
                }

                .col1-img1 {
                    position: absolute;
                    bottom: -10vh;
                    left: 2rem;
                }

                .col1-img2 {
                    position: absolute;
                    top: -3.5vh;
                    right: 1rem;
                }

                .col2-img1 {
                    position: absolute;
                    bottom: 5vh;
                    left: 4vw;
                    width: 90vw;
                    height: auto;
                }

                .col2-img2 {
                    position: absolute;
                    top: -2.5vh;
                    right: .3rem;
                }

                .col3-img1 {
                    position: absolute;
                    bottom: 5vh;
                    left: 4vw;
                    width: 90vw;
                    height: auto;
                }

                .col3-img2 {
                    position: absolute;
                    top: 2vh;
                    right: 3vw;
                }

                .col4-img1 {
                    position: absolute;
                    bottom: 2vh;
                    left: 2vw;
                    width: 90vw;
                    height: auto;
                    z-index: 1;
                }

                .col4-img2 {
                    position: absolute;
                    top: 2vh;
                    right: .75rem;
                    z-index: 0;
                }

            }
            

            .image2 {
                background: linear-gradient(to right bottom, #03040D, #292C3C, #03040D);
            }
            
            .image3 {
                background: linear-gradient(to right, #141e30, #243b55);
            }

            .image4 {
                background: linear-gradient(to bottom right, #0C1C66, #6284FC);
            }

            .info {
                height: 34vh;
                width: 100vw;
                background: linear-gradient(to right, rgb(126, 213, 111), rgb(40, 180, 133), rgb(0, 130, 77));
                -webkit-box-shadow: inset -27px 0px 21px -22px rgba(0,0,0,0.75);
                -moz-box-shadow: inset -27px 0px 21px -22px rgba(0,0,0,0.75);
                box-shadow: inset -27px 0px 21px -22px rgba(0,0,0,0.75);
                padding-top: 2rem;

                .link {
                    text-decoration: none;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease;
                    background: rgba(0, 0, 0, .5);
                    padding: 15px 20px;
                    border-radius: 20px;
                    margin: 0 20px;
                }
            }

            .info2 {
                background: linear-gradient(to left top, #03040D, #292C3C, #03040D);
            }

            .info3 {
                background: linear-gradient(to left, #141e30, #243b55);
            }

            .info4 {
                background: linear-gradient(to top right, #0C1C66, #6284FC);
            }
        }

        .owl-dots {
            margin-top: -1px !important;
            background: #03040D;
            height: 6vh;
            padding-top: 12px;
            padding-bottom: 1px;
        }
    }
`

const SiteDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0;
    color: #fff;

    h2 {
        color: #fff;
        font-family: 'Dancing Script',cursive;
        font-size: 45px;
        background: linear-gradient(to right bottom, #cecece, #ccc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 18px;
        margin: 10px 0;
    }

`

function WorkMobile() {
    const [work, setWork]  = useState({
        img1: Natours1,
        img2: Natours2,
        site: "https://animesh28.github.io/Natours/",
        name: "Natours",
        description: "Exciting Tours and Travels"
    })

  return (
    <Container>
        <PowerButton/>
        <LogoComponent />
        <Mobile>
        <OwlCarousel className='owl-theme' loop margin={10} items={1}>
            <div class='item'>
                <div className='image image1'>
                    <img src={Natours1} className='col-img col1-img1' alt='Natours 1'/>
                    <img src={Natours2} className='col-img col1-img2' alt='Natours 2'/>
                </div>
                <div className='info'>
                    <a href='' className='link'>{work.site}</a>
                    <SiteDescription>
                        <h2>{work.name}</h2>
                        <p>{work.description}</p>
                    </SiteDescription>
                </div>
            </div>
            <div class='item'>
                <div className='image image2'>
                    <img src={disney1} className='col-img col2-img1' alt='Natours 1'/>
                    <img src={disney2} className='col-img col2-img2' alt='Natours 2'/>
                </div>
                <div className='info info2'>
                    <a href='' className='link'>{work.site}</a>
                    <SiteDescription>
                        <h2>{work.name}</h2>
                        <p>{work.description}</p>
                    </SiteDescription>
                </div>
            </div>
            
            <div class='item'>
                <div className='image image3'>
                    <img src={jmdMac} className='col-img col3-img1' alt='Natours 1'/>
                    <img src={jmdS21} className='col-img col3-img2' alt='Natours 2'/>
                </div>
                <div className='info info3'>
                    <a href='' className='link'>{work.site}</a>
                    <SiteDescription>
                        <h2>{work.name}</h2>
                        <p>{work.description}</p>
                    </SiteDescription>
                </div>
            </div>
            
            <div class='item'>
                <div className='image image4'>
                    <img src={rudraText} className='col-img col4-img1' alt='Natours 1'/>
                    <img src={rudraTab} className='col-img col4-img2' alt='Natours 2'/>
                </div>
                <div className='info info4'>
                    <a href='' className='link'>{work.site}</a>
                    <SiteDescription>
                        <h2>{work.name}</h2>
                        <p>{work.description}</p>
                    </SiteDescription>
                </div>
            </div>
            
            
        </OwlCarousel>
        </Mobile>
    </Container>
  )
}

export default WorkMobile