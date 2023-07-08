import React from 'react'
import styled from 'styled-components'
import NeonVoteBtn from '../Buttons/NeonVoteBtn'

const Container = styled.div`
display: flex;
width: 100%;
border:.7px solid var(--grey-border-color);
display: flex;
align-items: center;
justify-content: center;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
`

const Image = styled.img`
width:70px;
height: 70px;
border-radius: 50%;
object-fit: cover;
`

const Middle = styled.div`
flex:2;
padding:25px;`
const PartyName = styled.p`
font-weight: bold;
font-size: 20px;
`
const CandiName = styled.p`
color:#0941ba;
font-weight: 500;
font-family: 'Times New Roman', Times, serif;
font-size: 20px;

`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
`
const VoteBtn = styled.div``
const VL = styled.div`
    height: 70px;
    border: 1px solid var(--grey-border-color);
`
const SingelParty = () => {
    return (
        <Container>
            <Left>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcCMygvIs-btwdGovsEZ_aoqPmgS4qhhT2eiZ2Bk&s' />
            </Left>
            <VL />
            <Middle>
                <PartyName>Bharrtiya Janta Party</PartyName>
                <CandiName>Narendra Modi    </CandiName>
            </Middle>
            <VL />
            <Right>
                <NeonVoteBtn/>
            </Right>

        </Container>
    )
}

export default SingelParty
