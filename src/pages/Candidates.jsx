import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {  Search } from '@mui/icons-material'
import HoverBtn from '../Buttons/HoverBtn'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import ScrollTrigger from "react-scroll-trigger"
const Container = styled.div`
`

const InnerContainer = styled.div`
display: flex;
`

const RightContainer = styled.div`
height: fit-content;
flex:6;
margin: 40px;
padding: 40px;
-webkit-box-shadow: 5px 5px 15px 2px #D0D0D0; 
box-shadow: 5px 5px 15px 2px #D0D0D0;
border-radius: 5px;
`

const FindData = styled.div`
`

const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const ResultBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap:20px;
flex-wrap: wrap;
`
const Box = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 20px;
background-image:${(props)=>props.bg};
width: 250px;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
color:white;
font-size: 35px;
font-weight: 400;
transition: all 1s ease-in;
&:hover{
  filter: brightness(120%);
transform: scale(1.1);
}

`

const Count = styled.h3`
color:white;
font-size: 35px;
font-weight: 400;

`
const CountName = styled.div``
const Filter = styled.span`
font-size:20px;
margin-right: 20px;
`
const FilterText = styled.span``;
const Select = styled.select`
padding: 5px 10px;
font-size: 15px;
font-weight: 500;
margin-left: 30px;
border-radius: 3px;;


`
const Option = styled.option`
width: 200px;
`




const Header = styled.div`
height:60px;
padding: 10px 10px;
display: flex;
align-content: center;
justify-content: space-between;
`

const ElectionName = styled.p`
font-weight: 600;
font-size: large;
`

const SearchContainer = styled.div`
border-radius: 20px;
border: 1.5px solid black;
height: 40px;
background-image: var(--candidateHeading);
display: flex;
align-items: center;
padding-left: 14px;
padding-right: 10px;


/* padding: 1px 10px; */
`
const Input = styled.input`
border: none;
border-radius: 2px;
font-size: 20px;
outline: none;
width: 150px;
transition: all .3s ease;
background-color: transparent;

&:focus{
  width:230px ;
}

`
const RightContainerWrapper = styled.div`
`

const CandidateHeading = styled.div`
background-image: linear-gradient(to right, #cfd9df 0%, #e2ebf0 100%);
background-image: var(--candidateHeading);
`
const Title = styled.p`
text-align: center;
font-size: 2rem;
font-weight: 700;
color: var(--navbar-color);
`

const CandidateItem = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
border-left:0.5px solid #e2dfdf;
border-bottom:0.5px solid #e2dfdf;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
`
const Image = styled.img`
width:150px;
height:200px;
object-fit: cover;
`
const Center = styled.div`
flex:4;
border-left:0.5px solid #e2dfdf;
border-bottom:0.5px solid #e2dfdf;

`

const CenterWrapper = styled.div`
-webkit-box-shadow: 5px 5px 15px 2px #D0D0D0; 
box-shadow: 5px 5px 15px 2px #D0D0D0;
border-radius: 10px;
margin:20px ;
height: 200px;
`
const CandidateName = styled.div`
height:60px;
background: var(--heading-gradient);
border-top-right-radius:10px;
border-top-left-radius:10px;
color:white;
font-size: 30px;
display: flex;
align-items: center;
justify-content: center;
`
const InfoItem = styled.div` 
display: flex;
flex-wrap: wrap;
margin: 20px;
`

const InfoContainer = styled.div`
flex:2;
`

const Item = styled.div`
display:flex;
gap:10px;
padding: 10px;
margin-top:10px;

`
const InfoTitle = styled.div`
   color:var(--grey-color);
   font-weight: 700;
   font-size: 20px;

`
const InfoName = styled.div`
font-weight: 500;

`
const ViewMoreButton = styled.div`
flex:1;
display: flex;
align-items: flex-end;
flex-direction: column;
justify-content: flex-end;
flex-direction: row;
padding: 40px 20px;
`

const Candidates = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
      <Container>
        <Navbar />
        <InnerContainer>
          <Sidebar />
          <RightContainer>
            <FindData>
              <FilterContainer>
                <Filter>
                  <FilterText>Election:</FilterText>
                  <Select name="Election :">
                    <Option disabled >Election</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>
                    <Option>Election-Oct-Dec-2022</Option>

                  </Select>
                  <FilterText>State:</FilterText>

                  <Select name="State">
                    <Option disabled >State</Option>
                    <Option>Andhra Pradesh
                    </Option>
                    <Option>Arunachal Pradesh
                    </Option>
                    <Option>Assam</Option>
                    <Option>Bihar</Option>
                    <Option>Chhattisgarh</Option>
                    <Option>Goa</Option>
                    <Option>Haryana</Option>
                    <Option>Gujarat</Option>
                  </Select>

                  <FilterText>District:</FilterText>
                  <Select name="District">
                    <Option disabled >District</Option>
                    <Option>Ahmedabad</Option>
                    <Option>Amreli</Option>
                    <Option>Anand</Option>
                    <Option>Aravalli</Option>
                    <Option>Banaskantha</Option>
                    <Option>Bharuch</Option>
                    <Option>Bhavnagar</Option>
                    <Option>Botad</Option>
                    <Option>Chhota Udaipur</Option>
                    <Option>Dahod</Option>
                  </Select>
                </Filter>
              </FilterContainer>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >

              <ResultBox>
                <Box bg="linear-gradient(to top, #00c6fb 0%, #005bea 100%)">
                  <Count>
                    { counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />  }+
                  <CountName>All</CountName>
                  </Count>
                </Box>
                <Box bg="linear-gradient(to right, #6a11cb 0%, #2575fc 100%)">
                  <Count>
                    { counterOn && <CountUp start={0} end={420} duration={2} delay={0} />  }+
                  <CountName>Accepted</CountName>
                  </Count>
                </Box>
                <Box bg="linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);">
                  <Count>
                    { counterOn && <CountUp start={0} end={300} duration={2} delay={0} />  }+
                  <CountName>Pending</CountName>
                  </Count>
                </Box>
                <Box bg="linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);">
                  <Count>
                    { counterOn && <CountUp start={0} end={200} duration={2} delay={0} />  }+
                  <CountName>Rejected</CountName>
                  </Count>
                </Box>
              </ResultBox>
              </ScrollTrigger>

            </FindData>
            <Header>
              <ElectionName>ELection-Apr-May-2023>>AC-General</ElectionName>
              <SearchContainer>
                <Input placeholder='Search by name' />
                <Search style={{ color: 'grey', fontSize: '25px' }} />
              </SearchContainer>
            </Header>
            <RightContainerWrapper>
              <CandidateHeading>
                <Title>List Of Candidates</Title>
              </CandidateHeading>
              <CandidateItem>
                <Left><Image src="https://www.pmindia.gov.in/wp-content/uploads/2023/04/H20230428131056.jpg" /></Left>
                <Center>
                  <CenterWrapper>
                    <CandidateName>Narendra Modi</CandidateName>
                    <InfoItem>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Party:</InfoTitle>
                          <InfoName>Bhartiya Janta Party(BJP)</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>State:</InfoTitle>
                          <InfoName>Karnatak</InfoName>
                        </Item>

                      </InfoContainer>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Status:</InfoTitle>
                          <InfoName>Applied</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>Constituency:</InfoTitle>
                          <InfoName>Kopaal</InfoName>
                        </Item>
                      </InfoContainer>
                      <Link className='link' to="/candidate/38u3">
                        <ViewMoreButton><HoverBtn /></ViewMoreButton>
                      </Link>
                    </InfoItem>
                  </CenterWrapper>
                </Center>
              </CandidateItem>
              <CandidateItem>
                <Left><Image src="https://www.pmindia.gov.in/wp-content/uploads/2023/04/H20230428131056.jpg" /></Left>
                <Center>
                  <CenterWrapper>
                    <CandidateName>Narendra Modi</CandidateName>
                    <InfoItem>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Party:</InfoTitle>
                          <InfoName>Bhartiya Janta Party(BJP)</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>State:</InfoTitle>
                          <InfoName>Karnatak</InfoName>
                        </Item>

                      </InfoContainer>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Status:</InfoTitle>
                          <InfoName>Applied</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>Constituency:</InfoTitle>
                          <InfoName>Kopaal</InfoName>
                        </Item>
                      </InfoContainer>
                      <Link className='link' to="/candidate/38u3">
                        <ViewMoreButton><HoverBtn /></ViewMoreButton>
                      </Link>
                    </InfoItem>
                  </CenterWrapper>
                </Center>
              </CandidateItem>
              <CandidateItem>
                <Left><Image src="https://www.pmindia.gov.in/wp-content/uploads/2023/04/H20230428131056.jpg" /></Left>
                <Center>
                  <CenterWrapper>
                    <CandidateName>Narendra Modi</CandidateName>
                    <InfoItem>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Party:</InfoTitle>
                          <InfoName>Bhartiya Janta Party(BJP)</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>State:</InfoTitle>
                          <InfoName>Karnatak</InfoName>
                        </Item>

                      </InfoContainer>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Status:</InfoTitle>
                          <InfoName>Applied</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>Constituency:</InfoTitle>
                          <InfoName>Kopaal</InfoName>
                        </Item>
                      </InfoContainer>
                      <Link className='link' to="/candidate/38u3">
                        <ViewMoreButton><HoverBtn /></ViewMoreButton>
                      </Link>
                    </InfoItem>
                  </CenterWrapper>
                </Center>
              </CandidateItem>
              <CandidateItem>
                <Left><Image src="https://www.pmindia.gov.in/wp-content/uploads/2023/04/H20230428131056.jpg" /></Left>
                <Center>
                  <CenterWrapper>
                    <CandidateName>Narendra Modi</CandidateName>
                    <InfoItem>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Party:</InfoTitle>
                          <InfoName>Bhartiya Janta Party(BJP)</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>State:</InfoTitle>
                          <InfoName>Karnatak</InfoName>
                        </Item>

                      </InfoContainer>
                      <InfoContainer>
                        <Item>
                          <InfoTitle>Status:</InfoTitle>
                          <InfoName>Applied</InfoName>
                        </Item>
                        <Item>
                          <InfoTitle>Constituency:</InfoTitle>
                          <InfoName>Kopaal</InfoName>
                        </Item>
                      </InfoContainer>
                      <Link className='link' to="/candidate/38u3">
                        <ViewMoreButton><HoverBtn /></ViewMoreButton>
                      </Link>
                    </InfoItem>
                  </CenterWrapper>
                </Center>
              </CandidateItem>
            </RightContainerWrapper>
          </RightContainer>
        </InnerContainer>
      </Container>

  )
}

export default Candidates