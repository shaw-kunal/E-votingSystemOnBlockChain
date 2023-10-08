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

const Section = styled.div`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  color: #222534;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`

const SectionContent = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const BulletPoint = styled.li`
  margin-bottom: 10px;
`;

const UserManual = () => {
  return (
    <Container>
    <Navbar/>
      <InnerContainer>
        <Sidebar/>
        <RightContainer>
        <Section>
          <SectionTitle>eVote - Secure and Reliable Electronic Voting System</SectionTitle>
          <SectionContent>
            eVote is an election system that facilitates voters to record their secure and secret ballot electronically. It has a friendly user interface and enables voters to cast their votes in a few simple steps. We ensure the authenticity of the voters and the votes cast by them along with non-traceability of the casted vote. eVote's robust architecture has persistently manifested to be one of the most reliable, comprehensible, and economical electronic voting solutions.
          </SectionContent>
          <SectionContent>
            It renders a simple and accessible voter experience that eventually increases voter engagement and turnout. Auditable, Easy To Use, Secure, and Reliable are what set eVote apart from its competitors.
          </SectionContent>
          <SectionContent>
            eVote has facilitated several organizations, across a wide range of industries, to conduct hassle-free electronic voting with utmost security and integrity. Some of our fortes include outstanding and prompt customer support, highly secure and trustworthy elections, and last but not least, our potential to be able to tabulate expeditious and accurate results.
          </SectionContent>
          <SectionContent>
            We’d welcome the opportunity to work with you to provide exceptional and unparalleled service and add you to our ever-growing list of satisfied clients.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>How it Works</SectionTitle>
          <SectionContent>
            Conducting an online election on eVote is a simple 3-step process:
          </SectionContent>
          <ol>
            <BulletPoint>
              <SectionContent>
                <strong>Set-up Election</strong>
              </SectionContent>
              <ul>
                <BulletPoint>
                  <SectionContent>
                    <strong>ADD ELECTION DETAILS:</strong> Add election details like the election date and time, candidate’s names, and photos.
                  </SectionContent>
                </BulletPoint>
                <BulletPoint>
                  <SectionContent>
                    <strong>ADD VOTER LIST:</strong> Drag and drop to import the list of voters from our convenient spreadsheet template.
                  </SectionContent>
                </BulletPoint>
                <BulletPoint>
                  <SectionContent>
                    <strong>REVIEW & LAUNCH:</strong> Once you've entered all the required details, review it and then you are good to go. Schedule a start/end date or immediately launch the election.
                  </SectionContent>
                </BulletPoint>
              </ul>
            </BulletPoint>
            <BulletPoint>
              <SectionContent>
                <strong>Vote</strong>
              </SectionContent>
              <SectionContent>
                Broadcast SMS and E-mails are sent to your voters to notify them about the election link, clicking on which voters can record their vote through any internet-enabled device.
              </SectionContent>
            </BulletPoint>
            <BulletPoint>
              <SectionContent>
                <strong>Results</strong>
              </SectionContent>
              <ul>
                <BulletPoint>
                  <SectionContent>
                    After the election ends, on the approval of the election officer, the result can be generated, which is automatically tabulated. This is solely for security purposes. The outcome can be published and shared with the voters on your eVote website.
                  </SectionContent>
                </BulletPoint>
              </ul>
            </BulletPoint>
          </ol>
        </Section>

        </RightContainer>
      </InnerContainer>

      
    </Container>
  )
}

export default UserManual
