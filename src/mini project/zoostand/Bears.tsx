import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import useBear from './store/bears'

export default function Bears() {

     const {Bears , increasePopulation,reset,updateBears } = useBear()
  return (
    <Stack spacing={2} alignItems={"center"}>
        <Typography variant='h3'> bears: {Bears} </Typography>
        <Stack direction={'row'} spacing={2}>
            <Button variant='contained' onClick={increasePopulation}>
                add more Bears
            </Button>
            <Button variant='outlined' onClick={reset}> kill all of them </Button>
            <Button variant='contained' color='secondary' onClick={() => {updateBears(10)}} >10 Bears at a second HEAR YOU ARE</Button>
        </Stack>
    </Stack>
  )
}
