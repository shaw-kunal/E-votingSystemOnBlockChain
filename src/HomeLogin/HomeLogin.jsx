import React, { useState } from 'react'

import Aos from "aos"
import 'aos/dist/aos.css'
import styled from 'styled-components'
// import Captcha from 'react-captcha-generator'; // Import the Captcha component


const Container = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
margin: 50px 0;
gap:50px;
`
const Left = styled.div`
flex:1;
`
const Image = styled.img`
width: 100%;
height: 600px;
object-fit: cover;
clip-path: polygon(30% 0%,81% 0%,100% 14%,100% 84%,86% 100%,30% 100%,0% 100%,0% 0%);

`
const Right = styled.div`
flex:1;
`

const Lower = styled.div``
const Upper = styled.div``
const Buttons = styled.button`
background-color: ${props => props.bg === "O" ? "#FF9833" : "#225354"};
color :white;
border :none;
margin-left: 20px;
font-size: 25px;
border-radius: 5px;
width: 200px;
padding: 10px;
cursor:pointer;
&:hover{
    opacity: .8;
}

`

const Login = styled.div``
const Input = styled.input``




const HomeLogin = () => {
    const [captchaValue, setCaptchaValue] = useState('');
    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <Container>
            <Left>
                <Image src='https://media.istockphoto.com/id/1311748943/photo/a-golden-color-plate-describing-the-constitution-of-india.jpg?s=612x612&w=0&k=20&c=h0WdJSx0jD-KZ_v5uoweQJJxCP4-h3sl0j8Sk4LqRFs='></Image>
            </Left>
            <Right>
                <Upper>
                    <Buttons bg="O">Voter</Buttons>
                    <Buttons>Candidate</Buttons>
                </Upper>
                <Lower>
                    {/* <NewUser></NewUser> */}
                    <Login>
                        <Input></Input>
                        <Input></Input>

                        {/* <Captcha
                            charCount={6}
                            onChange={handleCaptchaChange}
                            width={200}
                            height={60}
                            fontSize={30}
                            fontFamily="Arial"
                            bgColor="#FFF"
                            fontColor="#000"
                            charPositions="center"
                        /> */}
                    </Login>


                </Lower>
            </Right>
        </Container>
    )
}

export default HomeLogin