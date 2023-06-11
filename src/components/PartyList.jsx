import React from 'react'
import styled from 'styled-components'
import SingelParty from './SingelParty'

const Container = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
flex:3;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    position: relative;
    gap:1rem;
    background-color:  rgba(255, 255, 255, 0.64);
    padding: 20px;
  position: relative;
  padding-top: 40px;
`
const Title = styled.p`
height: 35px;
position: absolute;
width: inherit;
top:-25px;
display: flex;
align-items: center;
padding: 10px;
padding-left: 30px;
padding-right: 30px;
font-weight: 600;
font-size: 30px;
font-family: 'Times New Roman', Times, serif;

/* border: 0.7px solid var(--grey-border-color); */
background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%); ;
border-radius: 2rem;


`


const PartyList = () => {
    return (
        <Container>
            <Title>List Of Party</Title>
            <SingelParty />
            <SingelParty/>
            <SingelParty/>
            <SingelParty/>
            <SingelParty/>
        </Container>
    )
}

export default PartyList
