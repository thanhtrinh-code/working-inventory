import { Box, Typography } from '@mui/material'
import React from 'react'

export default function NoSelectedItems() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Typography align="center" sx={{fontFamily: 'Didot', fontSize: '24px', color: '#cc2530'}}>
        You selected 0 item, so no recipe was generated. Please selecting at least 1 item to generate a recipe.
      </Typography>
    </Box>
  )
}
