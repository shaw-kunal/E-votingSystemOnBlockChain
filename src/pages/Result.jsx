import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import ChartRes from '../components/ChartRes'
import { Title } from '@mui/icons-material'

const Container = styled.div`
`
const InnerContainer = styled.div`
display: flex;
`
const RightContainer = styled.div`
flex:6;
`
const Chart = styled.div`
display: flex;
height: 400px;
/* background-color: antiquewhite; */
`
const Left = styled.div`

`
const Right = styled.div``
const ResList = styled.div``
const Result = () => {
  return (
    <Container>
      <Navbar />
      <InnerContainer>
        <Sidebar />
        <RightContainer>
        <Title></Title>

        <Chart>
          <Left>
            <ChartRes/>
          </Left>
          <Right></Right>
        </Chart>
        <ResList>

        </ResList>
        </RightContainer>
      </InnerContainer>


    </Container>)
}

export default Result