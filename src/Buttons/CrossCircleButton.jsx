import {  Close } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
border: none;
padding: 2px;
display: flex;
justify-content: center;
align-content: center;
border-radius: 50%;
color: white;
background-color: red;
cursor: pointer;
`

const CrossCircleButton = () => {
  return (
    <Button>
      <Close/>
    </Button>
  )
}

export default CrossCircleButton
