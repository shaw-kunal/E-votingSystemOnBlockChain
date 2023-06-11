import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
position: relative;
text-align: center;
padding: 5px 20px;
font-size: 20px;
color:white;
font-family: poppins;
font-weight: 400;
border: 2px solid transparent;
background-color: #0941ba;

text-transform: uppercase;
letter-spacing: 5px;
cursor: pointer;
border-radius:100px ;
transition:1.5s;
&:hover{
    border: 2px solid #0941ba;
    color: #0941ba;
    background-color: white;
}
`

const NeonVoteBtn = () => {
  return (
    <Button>
      Vote
    </Button>
  )
}

export default NeonVoteBtn
