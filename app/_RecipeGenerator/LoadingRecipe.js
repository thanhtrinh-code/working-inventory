import { Box } from '@mui/material'
import React from 'react'
import { FadeLoader } from 'react-spinners'

export default function LoadingRecipe() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <FadeLoader color="#212121"/>
    </Box>
  )
}
