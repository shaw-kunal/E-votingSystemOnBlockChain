import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import BlankNavbar from '../components/BlankNavbar'
import { Link } from 'react-router-dom'
import { init } from 'ityped'
import "./../cssDesign/RegistrationInput.css"

const Container = styled.div`
flex-direction: column;
background-color: aliceblue;
`
const Heading = styled.div`
font-size: 30px;
font-weight: 700px;
margin-bottom: 20px;
`
const MainContainer = styled.div`
padding-top: 70px;

`
const MainInnerContainer = styled.div`
display:flex;
border-radius: 50px;
margin: 40px;
overflow: hidden;
`

const LeftContainer = styled.div`
flex:1;
width: 100%;
background-image: url("https://media.istockphoto.com/id/1276889373/vector/india-map-large-group-of-people-form-to-create-a-shape-of-india-map-vector-illustration.jpg?s=612x612&w=0&k=20&c=BVnOyKssG3DRmfbjRW0IKUD28O66Pbz_m7MacyFyXzg=");
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;
/* background-color: aliceblue; */
`
const Quote = styled.div`
padding: 35px;
font-weight: 400;
position: absolute;
left: 8px;
top:90px;
width:300px ;
`
const Line = styled.p`
font-family: 'Oleo Script', cursive;
font-size: 45px;
color: var(--grey-color);
text-align: center;
`

const RightContainer = styled.div`
flex:1;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:40px;
margin-right: 10px;
display: flex;
flex-direction: column;

`
const StyledForm = styled.form`
display: flex;
flex-wrap: wrap;
width:100%;
gap:20px;`


const FormItem = styled.div`
width:300px;
display: flex;
flex-direction: column;
position: relative;
`
const FormLabel = styled.label`
margin-bottom: 10px;
color:black;
font-weight: 500;
 font-size: 18px;
`
const FormInput = styled.input`
 padding: 12px;
 height: 20px;
 font-weight: 500;
 font-style: 20px;
 
 border: 1px solid grey;
 border-radius: 5px;
 font-size: 17px;
 &:focus{
   /* box-shadow: 0 0 5px rgba(81, 203, 238, 1); */
   outline: none;
                }         
`
const RadioItem = styled.div`
width: 100%;
`
const RadioGroup = styled.div`
display:flex;
gap: 10px;
`

const Lable = styled.p`
margin-right:15px;`

const RegisterBtn = styled.button`
background-color: #1cc7d0;
padding: 5px;
width: 110px;
font-size: 22px;
border: none;
color: white;
transition: all 1s ease;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
gap:10px;
transition: width 0.2s ease-in;

&:hover{
    background-image: linear-gradient(-120deg, #89f7fe 0%, #66a6ff 100%);
    width: 150px; 
}
`
const Registration = () => {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef)
    init(textRef.current, {
      showCursor: false,
      backDelay: 5000,
      backSpeed: 60,

      strings: [` "Cast your Vote,Use your Right,Make Our Country,Again Bright"-Kunal shaw`,
        `"The ballot is stronger than the bullet." - Abraham Lincoln
      `
        , `"A vote is like a voice in a democracy; make sure yours is heard."`]
    });



  }, [])

  return (
    <Container>
      <BlankNavbar />
      <MainContainer>
        <MainInnerContainer>
          <LeftContainer>
            <Quote>
              <Line ref={textRef}></Line>

            </Quote>
          </LeftContainer>
          <RightContainer>
            <Heading>Create An Account</Heading>
            <StyledForm>
              <FormItem>
                <FormLabel htmlFor='Fullname'>Full Name</FormLabel>
                <FormInput  className='textBoxR' type='text' name="Fullname" placeholder=' ' />
                <label className='inputLabelR' >Enter Your Name</label>
              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Email'>Email</FormLabel>
                <FormInput className='textBoxR'  type='Email' name="Email" placeholder=' ' />
                <label className='inputLabelR' >Email</label>

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Phone'>Phone Number</FormLabel>
                <FormInput className='textBoxR'  type='text' name="phone" placeholder=' ' />
                <label className='inputLabelR' >Phone  Number</label>

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='State'>State</FormLabel>
                <FormInput className='textBox'  type='text' name="State" placeholder=' ' />
                <label className='inputLabelR' >State</label>

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='City'>City</FormLabel>
                <FormInput className='textBoxR'  type='text' name="City" placeholder=' ' />
                <label className='inputLabelR' >City</label>

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Password'>Password</FormLabel>
                <FormInput className='textBoxR'  type='text' name="Password" placeholder=' ' />
                <label className='inputLabelR' >Password</label>
              </FormItem>

              <FormItem>
                <FormLabel htmlFor='Confirmpwd'>Confirmpwd</FormLabel>
                <FormInput  className='textBoxR' type='text' name="Confirmpwd" placeholder=' ' />
                <label className='inputLabelR' >Enter Your Name</label>

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Confirmpwd'>Confirmpwd</FormLabel>
                <FormInput className='textBoxR' type='text' name="Confirmpwd" placeholder=' ' />
                <label className='inputLabelR' >Confirm Password</label>

              </FormItem>
              <RadioItem>
                <FormLabel htmlFor='Gender'>Gender</FormLabel>
                <RadioGroup>
                  <FormInput type='radio' name='male' /><Lable>Male</Lable>
                  <FormInput type='radio' name='male' /><Lable>Female</Lable>
                  <FormInput type='radio' name='male' /><Lable>Other</Lable>
                  <FormInput type='radio' name='male' /><Lable>Prefer Not to say</Lable>

                </RadioGroup>
              </RadioItem>
              <Link className="link" to="/login"><RegisterBtn>Register</RegisterBtn></Link>
            </StyledForm>



          </RightContainer>

        </MainInnerContainer>


      </MainContainer>
    </Container>
  )
}

export default Registration