import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { ExpandMore, KeyboardDoubleArrowDown } from '@mui/icons-material'
import Verified from '../components/Verified'
import CandidateCard from '../components/candidateCard/CandidateCard'
import PartyList from '../components/PartyList'

const Container = styled.div`
`
const InnerContainer = styled.div`
display: flex;
`
const RightContainer = styled.div`
flex:6;
/* margin: 30?px; */
padding: 20px;
border-radius: 5px;
background-color: #f3f3f3;


`
const Heading = styled.div`
background-image: var(--candidateHeading);
display: flex;
font-size: 35px;
color: orange;
padding-left:20px;
margin-bottom: 30px;
`
const Title = styled.p`
text-align: center;
font-size: 2rem;
font-weight: 700;
color: var(--navbar-color);`
const DownArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

const VoteFollow = styled.div``

const VotingArea = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
align-content: center;
justify-content: center;
gap:20px;
`





const CastVote = () => {
    return (
        <Container>
            <Navbar />
            <InnerContainer>
                <Sidebar />
                <RightContainer>
                    <VoteFollow>
                        <Heading>
                            <Title>Cast Your Vote Here</Title>
                            <DownArrow>
                                <KeyboardDoubleArrowDown className='downArrow' fontSize='inherit' color='inherit' />
                            </DownArrow>
                        </Heading>
                    </VoteFollow>
                    {/* <Verified /> */}
                    <VotingArea>
                        <CandidateCard />
                        <PartyList />
                    </VotingArea>
                </RightContainer>
            </InnerContainer>
        </Container>
    )
}

export default CastVote
