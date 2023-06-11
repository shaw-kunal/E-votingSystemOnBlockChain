import { Button, DialogActions, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import CrossCircleButton from '../Buttons/CrossCircleButton'

const Title = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding-right: 20px;
`

const Verified = () => {

    const [verifyId, setVerifyId] = useState(false)
    const [verifyCode, setVerifyCode] = useState(false)
    const handleId = () => {
        setVerifyId(true);
    }

    const handleCode=()=>{
        setVerifyCode(true)
    }
    return (
        <Dialog open={true} PaperProps={{ sx: { width: "500px", } }}>
            <Title>
                <DialogTitle id="alert-dialog-title">
                    {"Verified Your Self"}
                </DialogTitle>
                <CrossCircleButton />
            </Title>
            <DialogContent dividers>
                {!verifyId ?
                    <><TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Voter ID"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Wallet Address"
                            type="text"
                            fullWidth
                            variant="standard"
                        /></> : <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter the Varification Code"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                }


            </DialogContent>
            <DialogActions>
                {
                    !verifyId ?  
                   <>
                 <Button onClick={handleId}>Submit</Button>
                    <Button>clear</Button></>:
                    <Button onClick={handleCode}/>
                   }
            </DialogActions>
        </Dialog>

       
    )
}

export default Verified
