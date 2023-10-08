import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Container = styled.div`
width: 100%;
height: calc(100vh -70px );
display: flex;
position: relative;
overflow-x: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #d6d3d3;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom: 0;
margin:auto;
cursor: pointer;
left :${props => props.direction === "left" && "10px"};
right :${props => props.direction === "right" && "10px"};
opacity: 0.5px;
z-index: 999;
`

const Wrapper = styled.div`
background-color: red;
height: inherit;
display: flex;
transform:  translate(${props => props.slideIndex * -100}vw);
transition: 1s all ease-in-out;
`

const Slide = styled.div`
display:  flex;
align-items: center;
width: 100vw;

height: calc(100vh - 70px);

`


const Image = styled.img`
width: 100%;
height: inherit;
object-fit: cover;
`

const SectionLine = styled.div`
  width: 100%;
  position: absolute;
  top:30px;
  z-index: 2;
`;

const Section= styled.span`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
`

const CastBtn = styled.button`
        border-radius: 4rem;
        font-size: 25px;
    font-weight: 500;
    padding: .4rem 1rem;
   border:2px solid white;
  cursor: pointer;
  color:#ffffff;
  background-color: transparent;
  transition:1s all ease-in-out;

  &:hover{
  color:#575757;
  background-color: #fff;

  

  }



`

const BackgroundSlider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }
    useEffect(() => {
        Aos.init({duration:2000});
      
      }, [])
      



    return (
        <Container>
            <SectionLine  >
                <Section >
                    <h3>Your voice your choice</h3>
                    <h1>"Not voting is not a </h1>
                    <h1>protest. </h1>
                    <h1>it is a surrender"</h1>
                    <CastBtn data-aos="fade-up">Cast your vote!</CastBtn>
                </Section>
            </SectionLine>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                <Slide>
               
                    <Image src='https://static.toiimg.com/thumb/msid-79588969,width-1070,height-580,imgsize-816189,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' />
                </Slide>
                <Slide>
                    <Image src='https://media.istockphoto.com/id/842464030/photo/parliament-house-in-new-delhi-india.jpg?s=612x612&w=0&k=20&c=-0-9txGoPFBr5jutcHSpT-Ktj0koqB2mPC4CHnAe1go=' />
                </Slide>
                <Slide>
                    <Image src='https://media.istockphoto.com/id/1194408157/photo/vidhana-soudha-located-in-bangalore-karnataka-india.jpg?s=612x612&w=0&k=20&c=Crz8Cli6VdhIYkqHib609K8BuMx4yDtVmc7zlaUCf6Q=' />
                </Slide>

            </Wrapper>





            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default BackgroundSlider