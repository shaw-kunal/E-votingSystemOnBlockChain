import { ArrowForward, ViewAgenda, ViewModuleRounded, Visibility } from '@mui/icons-material'
import React from 'react'
import "./hoverBtn.scss"

const HoverBtn = () => {
  return (
   <button className="btncon">
    <div className="text">View More</div>
  <Visibility/>
   </button>
  )
}

export default HoverBtn