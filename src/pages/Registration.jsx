import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import BlankNavbar from '../components/BlankNavbar'
import { Link } from 'react-router-dom'
import { init } from 'ityped'

const Container = styled.div`
flex-direction: column;
/* background-color: aliceb/lue; */
`
const Heading = styled.div`
font-size: 30px;
font-weight: 500px;
margin-bottom: 20px;
color:#585757;

`
const MainContainer = styled.div`
padding-top: 70px;

`
const MainInnerContainer = styled.div`
display:flex;
border-radius: 50px;
margin: 40px;
overflow: hidden;
height: 80vh;

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
/* background-color: white; */
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
margin: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:30px;
`

const Input = styled.input`
  background-color: white;
  border:none;
  padding: .75rem 2rem; /* Equivalent to px-5 py-4 */
  border-radius: 1rem; /* Equivalent to rounded-xl */
  width: 75%; /* Equivalent to w-3/4 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Equivalent to shadow-2xl */
  font-size: 1.125rem; /* Equivalent to text-lg */
  margin-bottom: 0.75rem; /* Equivalent to mb-3 */

  &:focus{
    outline:None;
  }

`


const SubmitButton = styled.button`
width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }

  &:active {
    transform: translateY(1px);
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
                <Input type='text' placeholder='Username' />
                <Input type='password' placeholder='password' />
                <Input type='password' placeholder='Confirm Password' />
                <SubmitButton>Register Now</SubmitButton>
              </FormItem>

            </StyledForm>
          </RightContainer>

        </MainInnerContainer>


      </MainContainer>
    </Container>
  )
}

export default Registration