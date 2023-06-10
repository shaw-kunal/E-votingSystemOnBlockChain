import styled from "styled-components"
import "./../global.css"
import Logo from "./../images/logo.png"




const Container = styled.div`
height: 70px;
background-color: #225354;
position: fixed;
width: 100%;
z-index: 2;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: start;
gap:20px;

`

const Left = styled.div`
background-color: white;
padding:0px 50px 0px 20px;
border-top-right-radius: 70%;
`
const Img = styled.img`
height: 50px;
`
const Title= styled.div`
font-size:5px;
`
const Right = styled.div`
color: white;
`
const Heading =styled.div`
font-size: 17px;


`


const BlankNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={Logo} alt="logo"></Img>
          <Title><h3>भारत चुनाव आयोग</h3>
          <h3>ELection Commission Of India</h3></Title>
        </Left>
        <Right>
        <Heading><p>भारत चुनाव आयोग</p>
          <h3>ELection Commission Of India</h3></Heading>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default BlankNavbar