import styled from "styled-components"
import { Link } from "react-router-dom";
import "./../global.css"
import Logo from "./../images/logo.png"
import {Avatar} from "@mui/material"


const Container = styled.div`
height: 70px;
background: var(--navbar-color);
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Left = styled.div`
background-color: white;
padding:0px 50px 0px 20px;
border-top-right-radius: 50%;
`
const Img = styled.img`
height: 50px;
`
const Title= styled.div`
font-size:5px;
`

const Center = styled.div`
display: flex;
width: 100%;
align-items: center;
gap:15px;
margin-left: 20px;
`

const Item = styled.div`
color:white;
font-size: 22px;
cursor: pointer;
transition: all .5s ease;
padding: 2px;
margin:2px;
&:hover{

}
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
margin-right: 20px;
`
const Rightitem= styled.div`
color:#eceaea88;
font-size: 18px;
transition: all .5s ease;
font-weight: 600;

&:hover{
 color: white;
}
`


const Profile = styled.div`
cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>

          <Img src={Logo} alt="logo"></Img>
          <Title><h3>भारत चुनाव आयोग</h3>
          <h3>ELection Commission Of India</h3></Title>
      
        </Left>
        <Center>
          <Link className="link" to="/"><Item>Home</Item></Link>
          <Link className="link" to="/vote" ><Item>Vote</Item></Link>
          <Link className="link" to="/grievances"><Item>Grievances</Item></Link>
<Link className="link" to="/about" ><Item>About</Item></Link>
        </Center>
        <Right>
          <Link className="link" to="/login"><Rightitem>Login</Rightitem></Link>
          <Link className="link" to="/"><Rightitem>Logout</Rightitem></Link>
        <Profile>  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Avatar></Profile>

        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar