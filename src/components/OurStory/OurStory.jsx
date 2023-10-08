import React, { useEffect } from 'react'
import styled from "styled-components"

import Aos from "aos"
import 'aos/dist/aos.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

const Container  = styled.div`
padding: 50px; 
/* overflow-x: hidden; */
height:fit-content;
display: flex;
flex-direction: column;
align-items: center;

`

const HeadingContainer = styled.div`
width: 100%;
`
const Heading  = styled.h2`
  z-index: 20;
  text-align: center;
  background-color:#FF9833;
  border-radius: 3px;
  color:white;

`
const InnerContainer  = styled.div`
text-align: center;
width: 80%;
`
const Title  = styled.h2`
padding: 10px;
color: #225354;
font-size: 30px;
`
const Desc = styled.p`
font-family:'Times New Roman', Times, serif;
`
const ButtonReadMore  = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
margin-top: 20px;
border: none;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
border-radius: 4px;
font-weight: 400;
transition: all 1s ease-in-out;
&:hover{
    color: #FF9833;
}

    
`


const OurStory = () => {
    useEffect(() => {
      Aos.init();
    
    }, [])
    
  return (
    <Container>
    <HeadingContainer >
       <Heading data-aos="zoom-in-down" >About Voting Portal</Heading>
    </HeadingContainer>
       <InnerContainer  data-aos-duration="1500">
        <Title data-aos="fade-up"  data-aos-duration="1000">Our Story</Title>
        <Desc  data-aos="fade-up"  data-aos-duration="1500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos sit autem. Veritatis magni velit, inventore doloremque sunt possimus, tempora ipsa mollitia, nisi iste voluptate voluptatibus vitae aliquid quia fugiat.</Desc>
       </InnerContainer>

       <ButtonReadMore data-aos="fade-up">ReadMore <ArrowRightOutlined/></ButtonReadMore>


 


    </Container>
  )
}

export default OurStory