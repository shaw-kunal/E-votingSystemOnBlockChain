import React from 'react'

import Aos from "aos"
import 'aos/dist/aos.css'
import styled from 'styled-components'
import { useEffect } from 'react'



const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
background-image: linear-gradient(
  175deg,
  hsl(30deg 95% 92%) 0%,
  hsl(30deg 96% 93%) 18%,
  hsl(30deg 97% 95%) 26%,
  hsl(29deg 98% 96%) 33%,
  hsl(29deg 100% 97%) 39%,
  hsl(29deg 100% 99%) 44%,
  hsl(0deg 0% 100%) 50%,
  hsl(123deg 88% 98%) 56%,
  hsl(123deg 88% 96%) 61%,
  hsl(124deg 87% 95%) 67%,
  hsl(124deg 87% 93%) 74%,
  hsl(124deg 86% 91%) 82%,
  hsl(125deg 86% 89%) 100%
  );

padding:80px 0px;

`

const Image = styled.img`
cursor: pointer;
`


const ProcessLine = () => {
    useEffect(() => {
      Aos.init();
    
    }, [])
  return (
    <Container>
        <Image data-aos="fade-up" src="https://eci.gov.in/img/voter-services-icon.png"></Image>
        <Image data-aos="fade-down" src="https://eci.gov.in/img/voter-education-icon.png"></Image>
        <Image data-aos="fade-up" src="https://eci.gov.in/img/election-icon.png"></Image>
        <Image   data-aos="fade-down" src="https://eci.gov.in/img/political-party-icon.png"></Image>
        <Image   data-aos="fade-up" src="https://eci.gov.in/img/publication-icon.png"></Image>
        <Image  data-aos="fade-down" src="https://eci.gov.in/img/ict-apps-icon.png"></Image>
    </Container>
  )
}

export default ProcessLine