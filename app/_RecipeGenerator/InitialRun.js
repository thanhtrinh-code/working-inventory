import { Box, Typography } from '@mui/material'
import React from 'react'

export default function InitialRun() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Typography align="center" sx={{fontFamily: 'Didot', fontSize: '22.5px', color: '#0f38bf'}}>
        Please select at least 1 item from the inventory to generate a recipe.
      </Typography>
    </Box>
  )
}
