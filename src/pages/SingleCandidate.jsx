import React from 'react'
import BlankNavbar from '../components/BlankNavbar'
import styled from 'styled-components'
import DownloadBtn from '../Buttons/DownloadBtn'
import DisclaimerFooter from '../components/DisclaimerFooter'
const Container = styled.div`
display:flex;`

const InnerContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding: 30px;
margin:70px 20px 20px 20px;

`
const Title = styled.div`
height: 60px;
-webkit-box-shadow: 5px 5px 15px 5px #E6E6E6; 
box-shadow: 5px 5px 15px 5px #E6E6E6;
display: flex;
align-items: center;


`
const TitleName = styled.div`
font-size: 1.5rem;
font-weight: 600;
margin-left: 20px;

`
const Upper = styled.div`
width:100%;
background-color: var(--singleCadidateBackground);
`
const UpperWrapper = styled.div`
padding:30px;
display: flex;
flex-wrap: wrap;
gap: 20px;
`
const UpperLeft = styled.div`
flex:2;
display:flex;
`
const ImageContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Image = styled.img`
width:200px;
height: 200px;
border-radius: 50%;
object-fit: cover;
`
const PartyDetails = styled.div`
flex:2;
background-color: white;
display: flex;
flex-direction: column;
gap:20px;
padding: 20px;
`
const Items = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`
const ItemName = styled.h3`
color: var(--grey-color);
flex: 1;
`
const ItemValue = styled.p`
font-weight: 600;
flex: 1;
`
const PartyImg = styled.img`
width:50px;
height:50px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
`


const UpperRight = styled.div`
flex:1;
background-color:white;
display: flex;
flex-direction: column;
padding: 20px;
gap:20px;
`

const UpperItem = styled.div`
display:flex;
width: 100%;
gap: 30px;
align-items: center;
justify-content: start;
padding-bottom: 10px;
border-bottom: .2px solid var(--grey-border-color);
`

const UpperRightTItle = styled.h3`
color:var(--navbar-color);
`
const UpperRightValue = styled.p`
font-weight: 500;
font-size: large;
`
const Lower = styled.div`
margin-top: 20px;
background-color:var(--singleCadidateBackground);
padding: 0px 10px;
-webkit-box-shadow: 5px 5px 15px 5px #E6E6E6; 
box-shadow: 5px 5px 15px 5px #E6E6E6;

`
const LowerContainer = styled.div`
background-color: white;

`
const PersonalDeatailTitle = styled.div`
height: 70px;

display: flex;
align-items: center;
border-bottom: 0.5px solid var(--grey-border-color);

`
const CandidateTitle = styled.p`
font-size: 30px;
font-weight: 500;
padding-left: 20px;
`
const PersonalDeatailsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
gap: 20px;
border-bottom: 0.5px solid var(--grey-border-color);;
`
const DetailsItem = styled.div`
display:flex;
align-items: center;
width:70%;
justify-content: start;
flex-wrap:wrap;
gap:10px;
`

const DetailTitle = styled.p`
flex: 1;
font-size: 20px;
font-weight: 700;

`
const DetailValue = styled.p`
font-size:18px;
flex: 1;
font-weight:400;
`



const SingleCandidate = () => {
  return (
    <Container>
      <BlankNavbar></BlankNavbar>
      <InnerContainer>
        <Title><TitleName>Candidate Details</TitleName></Title>
        <Upper>
          <UpperWrapper>
            <UpperLeft>
              <ImageContainer>
                <Image src='https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg'></Image>
              </ImageContainer>
              <PartyDetails>
                <Items>
                  <ItemName>Party Name:</ItemName>
                  <ItemValue>
                    Bhartiya Janta party
                  </ItemValue>
                </Items>
                <Items>
                  <ItemName>Party Symbol:</ItemName>
                  <ItemValue>
                    <PartyImg src='https://commons.wikimedia.org/wiki/File:BJP_election_symbol.png' alt="not fount"></PartyImg>
                  </ItemValue>
                </Items>
                <Items>
                  <ItemName>Assembly Constituency:</ItemName>
                  <ItemValue>Koppal</ItemValue>
                </Items>
                <Items>
                  <ItemName>State:</ItemName>
                  <ItemValue>Karnataka </ItemValue>
                </Items>
                <Items>
                  <ItemName>Application Uploaded:</ItemName>
                  <ItemValue>18th April, 2023</ItemValue>
                </Items>
                <Items>
                  <ItemName>Current Status:</ItemName>
                  <ItemValue>Applied</ItemValue>
                </Items>
              </PartyDetails>
            </UpperLeft>

            <UpperRight>
              <UpperItem>
                <UpperRightTItle>Affidavit:</UpperRightTItle>
                <DownloadBtn />
              </UpperItem>
              <UpperItem>
                <UpperRightTItle>DownLoad Count:</UpperRightTItle>
                <UpperRightValue>276</UpperRightValue>
              </UpperItem>
              <UpperItem>
                <UpperRightTItle>Affidavit Uploaded:</UpperRightTItle>
                <UpperRightValue>	26th April, 2023</UpperRightValue>
              </UpperItem>
            </UpperRight>
          </UpperWrapper>
        </Upper>
        <Lower>
          <LowerContainer>
            <PersonalDeatailTitle>
              <CandidateTitle>Candidate Personal Details</CandidateTitle>
            </PersonalDeatailTitle>
            <PersonalDeatailsContainer>
              <DetailsItem>
                <DetailTitle>Father's /Husband Name:</DetailTitle>
                <DetailValue>K Basavaraj</DetailValue>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle>Father's /Husband Name:</DetailTitle>
                <DetailValue>K Basavaraj</DetailValue>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle> Name:</DetailTitle>
                <DetailValue>K. RAGHAVENDRA BASAVARAJ HITNAL
                </DetailValue>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle>Address:</DetailTitle>
                <DetailValue>Resident of Hitnal Tq:Dist : Koppal</DetailValue>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle>Gender:</DetailTitle>
                <DetailValue>male: Koppal</DetailValue>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle>Age:</DetailTitle>
                <DetailValue>44</DetailValue>
              </DetailsItem>
            </PersonalDeatailsContainer>
          </LowerContainer>
        </Lower>
        <DisclaimerFooter/>
      </InnerContainer>
    </Container>
  )
}

export default SingleCandidate