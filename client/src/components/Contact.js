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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
    formik.handleSubmit()
  }

  const formik = useFormik({

    initialValues:{ 
      fName: '',
      lName: '',
      email: '',
      phone: '',
      message: '',
      frontEnd: false,
      backEnd: false,
      other: false
    },

    validationSchema:Yup.object({
        fName: Yup.string()
        .required('Sorry, First Name is required'),

        lName: Yup.string()
        .required('Sorry, Last Name is required'),

        email: Yup.string()
        .required('Sorry, E-mail is required')
        .email('Please enter a valid E-mail'),

        phone: Yup.string()
        .required("Sorry, Phone Number is required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Please enter a valid Phone Number"
        ),

        message: Yup.string()
        .required('Sorry, Message is required')
        .min(10, 'Let\'s hear more from you!' )
        .max(1000, 'Can you be a bit precise about your query.'),
        
        frontEnd: Yup.boolean(),

        backEnd: Yup.boolean(),
        
        other: Yup.boolean(),
    }),
    onSubmit:(values, { resetForm })=>{
        handleSubmit(values)
    }
  })

  const handleSubmit = async (values) => {
      try {
        await axios.post('https://animesh28-portfolio-server.herokuapp.com/send_email', {
          ...values
        })

        toast.success('E-mail sent successfully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })

      } catch(error) {

        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      }
  }

  const errorHelper = (formik, values) => {
      return({
          error: formik.errors[values] && formik.touched[values] ? true : undefined,
          helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : undefined
      })
  }
  return (
    <MainContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <ContactForm onSubmit={formik.handleSubmit}>
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
                      <AccountCircle style={{fill: '#1976d2'}}/>
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps('fName')}
                {...errorHelper(formik,'fName')}
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
                      <AccountCircle style={{fill: 'rgb(126,83,249)'}} />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps('lName')}
                {...errorHelper(formik,'lName')}
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
                      <EmailIcon style={{fill: '#1976d2'}} />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps('email')}
                {...errorHelper(formik,'email')}
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
                      <CallIcon style={{fill: 'rgb(126,83,249)'}} />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps('phone')}
                {...errorHelper(formik,'phone')}
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
                    label="Front-end Development" 
                    {...formik.getFieldProps('frontEnd')}
                  />
                </div>
                <div>
                <FormControlLabel control={
                  <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon style={{fill: 'rgb(126,83,249)'}}/>}
                    />} 
                    label="Back-end Development" 
                    {...formik.getFieldProps('backEnd')}
                  />
                </div>
                <div>
                <FormControlLabel control={
                  <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon style={{fill: 'rgb(126,83,249)'}}/>}
                    />} 
                    label="Other" 
                    {...formik.getFieldProps('other')}
                  />
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
                      <ChatIcon style={{fill: '#1976d2'}} />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps('message')}
                {...errorHelper(formik,'message')}
              />
            </FormGroup>

            <SubmitBtnWrap>
            <StyledLoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              type="submit"
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

export default Contact