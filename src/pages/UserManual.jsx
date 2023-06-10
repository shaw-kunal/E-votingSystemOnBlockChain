import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const Container = styled.div`
`
const InnerContainer = styled.div`
display: flex;
`
const RightContainer = styled.div`
flex:6;
margin: 30px;
padding: 20px;
-webkit-box-shadow: 5px 5px 15px 2px #D0D0D0; 
box-shadow: 5px 5px 15px 2px #D0D0D0;
border-radius: 5px;

`

const UserManual = () => {
  return (
    <Container>
    <Navbar/>
      <InnerContainer>
        <Sidebar/>
        <RightContainer>

        </RightContainer>
      </InnerContainer>

      
    </Container>
  )
}

export default UserManual
