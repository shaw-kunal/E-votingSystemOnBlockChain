import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width: 100%;
`
const ContainerWrapper = styled.div`
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: end;;
`
const Left = styled.p`
flex:2;
font-family: 'Oleo Script', cursive;
`
const Right = styled.p`
flex:1;
font-family: 'Oleo Script', cursive;
color: var(--grey-border-color);

`
const Heading = styled.div`
font-size: 17px;
color: var(--grey-border-color);
`


const DisclaimerFooter = () => {
    return (
        <Container>
            <ContainerWrapper>
                <Left>   
                <Heading><p>भारत चुनाव आयोग</p>
                    <h3>ELection Commission Of India</h3></Heading></Left>
                <Right>Disclaimer:This is Computer generated report. The data is published dynamically based upon the current updated data by the returning officer, which is subject to change and is purely tentative.To get the confirmed list, kindly, contact the respective returning officer.</Right>
            </ContainerWrapper>

        </Container>
    )
}

export default DisclaimerFooter