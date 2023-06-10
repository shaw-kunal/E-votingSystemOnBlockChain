import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Container = styled.div`
`
const InnerContainer = styled.div`
display: flex;
`
const RightContainer = styled.div`
flex:6;
margin: 30px;
padding: 20px;
-webkit-box-shadow: 5px 5px 15px 2px #D0D0D0; 
box-shadow: 5px 5px 15px 2px #D0D0D0;
border-radius: 5px;

`

const StyledForm = styled.form`
display: flex;
flex-wrap: wrap;
width:70%;
justify-content: space-between;
gap:20px;`


const FormItem = styled.div`
width:400px;
display: flex;
flex-direction: column;
`
const FormLabel = styled.label`
margin-bottom: 10px;
color:#7e7b7b;
font-weight: 500;
 font-size: 18px;
`
const FormInput =
 styled.input`
                padding: 10px;
                height: 20px;
                border: 1px solid grey;
                border-radius: 5px;
                font-size: 17px;
                &:focus{
                  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
                  outline: none;
                }         
   `
const StyledButton = styled.button`
cursor: pointer;
padding: 8px 30px;
border: none;
font-size: 20px;
border-radius: 5px;
color: white;
background-color: var(--sideBar-color);
margin-top: 20px;
`
const StyledError = styled.div``

const CandidateHeading = styled.div`
background-image: linear-gradient(to right, #cfd9df 0%, #e2ebf0 100%);
background-image: var(--candidateHeading);
`
const Title = styled.p`
text-align: center;
font-size: 2rem;
font-weight: 700;
color: var(--navbar-color);
`

const VotingRegistration = () => {
  return (
    <Container>
      <Navbar />
      <InnerContainer>
        <Sidebar />
        <RightContainer>
          <CandidateHeading>
            <Title>Register for Vote</Title>
          </CandidateHeading>
          <StyledForm>
            <FormItem>
              <FormLabel htmlFor='First'>First Name</FormLabel>
              <FormInput type='text' name="middle" placeholder='john' />
            </FormItem>
            <FormItem>
              <FormLabel htmlFor='middle'>Middle Name(optional)</FormLabel>
              <FormInput type='text' name="middle" placeholder='' />
            </FormItem>
            <FormItem>
              <FormLabel htmlFor='last'>Last name</FormLabel>
              <FormInput type="text" name="last" placeholder='gellar' />
            </FormItem>
            <FormItem>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type='email' name="email" placeholder='john@gmail.com' />
            </FormItem>

            <FormItem>
              <FormLabel htmlFor='phone'>Mobile no:</FormLabel>
              <FormInput type='phone' name="phone" placeholder='628945698' />
            </FormItem>
            <FormItem>
              <FormLabel htmlFor='addhar'>Addhar NO:</FormLabel>
              <FormInput type="text" name="addhar" placeholder='121521351234' />
            </FormItem>
            <FormItem>
              <FormLabel htmlFor='walletAddress'>walletAddress:</FormLabel>
              <FormInput type="text" name="walletAddress" />
            </FormItem>

          </StyledForm>
          <StyledButton>Register</StyledButton>
        </RightContainer>
      </InnerContainer>
    </Container>
  )
}
export default VotingRegistration