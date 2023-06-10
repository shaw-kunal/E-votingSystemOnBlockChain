import { FileDownload } from '@mui/icons-material'
import React from 'react'
import "./downloadBtn.scss"


const DownloadBtn = () => {
  return (
    <button className='downlaod-btn'>
        <p className='download-btn-title'>DownLoad</p>
        <FileDownload/>
    </button>
  )
}

export default DownloadBtn