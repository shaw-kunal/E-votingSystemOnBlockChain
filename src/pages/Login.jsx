import React from 'react'
import styled from 'styled-components'
import Logo from './../images/logologin.png'
import LoginIcon from '@mui/icons-material/Login';
import { ArrowForward, LockOpen, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./../cssDesign/input.css"


const Container = styled.div`
width: 100%;
height: 100vh;
/* background-image: url('https://images.unsplash.com/photo-1496868834840-5f4c98840aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmQlMjBpbWFnZSUyMGZvciUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'); */
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
display: flex;
align-items:center;
justify-content: center;
`

const InnerContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
width: 400px;
background-color: white;
height:75% ;
border-radius: 4px;
position: relative;

`
const Upper = styled.div`
background-color:#5BD1D7; 
width: 100%;
height: 35%;
display: flex;
align-items:center;
justify-content: center;
position: relative;
border-radius: 4px;

`

const LogoImg = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
position: absolute;
top:15px;
`


const Lower = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
width: 80%;
position: absolute;
top: 120px;
left: 40px;
height: calc(100% - 120px);
background-color: white;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
`
const LowerContainer = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;
`
const Heading = styled.div`
display: flex;
gap:10px;
align-items: center;
justify-content: center;
`
const Title = styled.h2`
font-weight:500px;
color:#2ee6f0;
`
const Items = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
gap:30px;
flex-direction: column;

`
const InputItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
const Input = styled.input`
padding: 8px;
padding-left:28px ;
font-size: 18px;
outline: none;
font-weight: 600;
color: var(--grey-color);
border: none;
border-radius:5px;
outline: none;
border: 1px solid #1cc7d0;
`
const LoginBtn = styled.button`
background-color: #5BD1D7;
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
background-image: linear-gradient(120deg, #9feff5 0%, #5BD1D7 100%);
gap:10px;
transition: width 0.2s ease-in;

&:hover{
    background-image: linear-gradient(-120deg, #5BD1D7 0%, #9feff5 100%);
    width: 150px; 

}
`
const NoAccount = styled.p``

const Login = () => {
    return (
        <Container>
            <InnerContainer>
                <Upper>
                    <LogoImg src={Logo}></LogoImg>
                </Upper>
                <Lower>
                    <LowerContainer>
                        <Heading>
                            <Title>Login Here</Title>
                            <LoginIcon className='loginArrow' />
                        </Heading>
                        <Items>
                            <InputItem >
                                <Person className='IconNamepass' />
                                <Input  className='textBox' placeholder=" " ></Input>
                                <label className='inputLabel'>UserName</label>
                            </InputItem>
                            <InputItem>
                                <LockOpen className='IconNamepass' />
                                <Input className='textBox' type='password' placeholder=' '></Input>
                                <label className='inputLabel'>Password</label>

                            </InputItem>
                            <InputItem>
                                <LoginBtn>
                                    Login
                                    <ArrowForward />
                                </LoginBtn>
                            </InputItem>
                        </Items>
                        <Link to="/register"><NoAccount>Did't have Account? Create Account</NoAccount></Link>
                    </LowerContainer>
                </Lower>
            </InnerContainer>
        </Container>
    )
}

export default Login

