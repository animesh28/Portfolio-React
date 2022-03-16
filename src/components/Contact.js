import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom'
import { Whatsapp, Github, LinkedIn } from './AllSvgs'
import { TextField, InputAdornment, FormControlLabel } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import Checkbox from '@mui/material/Checkbox'
import ChatIcon from '@mui/icons-material/Chat'
import SendIcon from '@mui/icons-material/Send'
import { styled as styledMui } from '@mui/material/styles'

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f9fb;
  padding: 5rem 8rem;
  padding-bottom: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
`
const ContactHead = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    color: #242458;
    font-size: 2.7rem;
  }

  span {
    color: #8384a6;
    font-size: 1.2rem;
    margin: 10px 0;
  }
`
const ContactFormWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 70vh;
  background-color: #fff;
  box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.4);
  border-radius: 16px;
  display: flex;
  align-items: center;
`

const ContactCTA = styled.div`
  height: calc(100% - 26px);
  width: 65%;
  background-color: #3e2093;
  margin-left: 10px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding: 2rem;

  span.orange-bubble {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #fa949d;
    position: absolute;
    bottom: -18vh;
    right: -6vw;
    z-index: 2;
  }

  span.blue-bubble {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(126, 83, 249, .8);
    position: absolute;
    bottom: 10vh;
    right: 5vw;
    z-index: 2;
  }
`

const CTAHead = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    color: #fff;
  }

  span {
    color: #8384a6;
    margin-top: 10px;
  }
`

const CTAICons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  

  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    margin: 15px 0;

    span {
      margin-left: 15px;
    }
  }
`

const SocialIcons = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;


  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    transition: all .5s ease-out;

    &:hover {
      background: #fa949d;
    }
  }
`

const ContactForm = styled.form`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

const ServiceWrap = styled.div`
  h3 {
    color: #060749;
  }
`

const CheckBoxWrap = styled.div`
  display: flex;
  margin: 10px 0;
  
  & > div:first-of-type {
    margin-right: 10px;
  }

  & > div:not(:first-of-type) {
    margin: 0 10px;
  }

  & > div:last-of-type {
    margin-right: 0px;
  }


`

const SubmitBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledLoadingButton = styledMui(LoadingButton)({
  background: '#3e2093',
  width: '180px',
  padding: '15px 0',

  '&:hover': {
    background: '#7e53f9'
  }
})

function Contact() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <MainContainer>
      <LogoComponent/>
      <PowerButton/>
      <Container>
        <ContactHead>
          <h1>Contact Me</h1>
          <span>Any questions or remarks, Just write me a message!</span>
        </ContactHead>

        <ContactFormWrap>
          <ContactCTA>
            <CTAHead>
              <h2>Contact Information</h2>
              <span>Fill up the form and I'll get back to you within 24 hours.</span>
            </CTAHead>
            <span className='orange-bubble'></span>
            <span className='blue-bubble'></span>
            <CTAICons>
              <NavLink to='/'>
                <CallIcon style={{fill: '#fa949d'}}/>
                <span>+91 8210118679</span>
              </NavLink>
              <NavLink to='/'>
                <EmailIcon style={{fill: '#fa949d'}}/>
                <span>animesh.raj.om@gmail.com</span>
              </NavLink>
              <NavLink to='/'>
                <LocationOnIcon style={{fill: '#fa949d'}}/>
                <span>Ranchi, Jharkhand</span> 
              </NavLink>
            </CTAICons>

            <SocialIcons>
              <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <Whatsapp width={25} height={25} style={{fill: "#fff"}}/>
              </NavLink>
              <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <Github width={25} height={25} style={{fill: "#fff"}}/>
              </NavLink>
              <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://google.co.in/"}}>
                <LinkedIn width={25} height={25} style={{fill: "#fff"}}/>
              </NavLink>
            </SocialIcons>
          </ContactCTA>
          <ContactForm>
            <FormGroup>
              <TextField 
                id="standard-basic" 
                label="First Name" 
                variant="standard" 
                color='secondary'
                style={{width: "45%"}} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField 
                id="standard-basic" 
                label="Last Name" 
                variant="standard" 
                color='secondary'
                style={{width: "45%"}} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormGroup>
            <FormGroup>
              <TextField 
                id="standard-basic" 
                label="E-mail" 
                variant="standard" 
                color='secondary'
                style={{width: "45%"}} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField 
                id="standard-basic" 
                label="Phone" 
                variant="standard" 
                color='secondary'
                style={{width: "45%"}} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormGroup>

            <ServiceWrap>
              <h3>Your query comprise of which of the following?</h3>
              <CheckBoxWrap>
                <div>
                <FormControlLabel control={
                  <Checkbox
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon style={{fill: 'rgb(126,83,249)'}}/>}
                  />} 
                  label="Front-end Development" />
                </div>
                <div>
                <FormControlLabel control={
                  <Checkbox
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon style={{fill: 'rgb(126,83,249)'}}/>}
                  />} 
                  label="Back-end Development" />
                </div>
                <div>
                <FormControlLabel control={
                  <Checkbox
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon style={{fill: 'rgb(126,83,249)'}}/>}
                  />} 
                  label="Other" />
                </div>
              </CheckBoxWrap>
            </ServiceWrap>
            <FormGroup>
              <TextField
                id="standard-multiline-static"
                label="Your Message"
                multiline
                rows={4}
                variant="standard"
                style={{width: "100%"}} 
                color='secondary'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ChatIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormGroup>

            <SubmitBtnWrap>
            <StyledLoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </StyledLoadingButton>
            </SubmitBtnWrap>
          </ContactForm>
        </ContactFormWrap>
      </Container>
    </MainContainer>
  )
}

export default Contact