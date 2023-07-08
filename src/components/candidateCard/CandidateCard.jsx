import React from 'react'
import "./candiateCard.css"
import styled from 'styled-components'
const VL = styled.div`
    height: 70px;
    border: 1px solid var(--grey-border-color);
`
const CandidateCard = () => {
  return (
    <div className='ProfileCard'>
     <div className="profileImages">
        <img src="https://wallpapers.com/images/featured/lsjkr6wg7ctq97qv.jpg"alt="" />
        {/* <img src="https://i.pinimg.com/236x/71/0d/b1/710db188484e1e9467b72e0a090b4d73.jpg" alt="" style={{objectFit:"cover"}} /> */}
     </div>
     <div className="profileName">
        <span>Narendra Modi</span>
        <span>Bharita Janta Party</span>
     </div>
     <div className="followStatus">
        <hr/>
        <div>
       <div className="follow">
            <span>State</span>
            <span>karnataka</span>
        </div>
    
        <VL></VL>
        <div className="follow">
            <span>Constituency</span>
            <span>Kopaal</span>
        </div>
       </div>
       <hr/>

     </div>
     <span>My profile</span>

      
    </div>
  )
}

export default CandidateCard
