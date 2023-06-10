import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { AddTask, HowToReg, HowToVote, LabelImportant, MilitaryTech, PeopleAlt } from '@mui/icons-material';

const Container = styled.div`
flex: 1;
border-right:0.5px solid grey;
height:max-height;
padding: 20px ;
padding-left:30px;



`
const Wrapper = styled.div`
display:flex;
flex-direction: column;
gap:20px;
`
const Title = styled.h3`
display: flex;
gap:10px;
color: var(--grey-color);
`

const ItemContaier = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap:15px;
`
const Item = styled.div`
display:flex;
gap:10px;
align-items: center;
padding: 3px 4px;
transition: all .5s ease-out;
border-radius:4px ;
color: var(--primary-color2);
background-color: aliceblue;


&:hover{
  background-color: var(--sideBar-color);
  color:white;
}
`
const Lable = styled.span`
font-weight: 600;
font-size: large;
`

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>

        <Title><LabelImportant />Step to cast Vote</Title>

        <ItemContaier>
          <Link className="link" to="/vote"><Item> <AddTask /><Lable>User Manual</Lable></Item></Link>
          <Link className="link" to="/VotingReg"><Item><HowToReg /><Lable>Voting Registration</Lable></Item></Link>
          <Link className="link" to="/candidates"> <Item> <PeopleAlt /><Lable>View Candidates</Lable></Item></Link>
          <Link className="link" to="/castVote"> <Item><HowToVote /> <Lable>Cast Vote</Lable></Item></Link>
          <Link className="link" to="/result"> <Item><MilitaryTech /> <Lable>View Result</Lable></Item></Link>
        </ItemContaier>
      </Wrapper>
    </Container>
  )
}

export default Sidebar