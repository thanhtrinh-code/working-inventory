'use client'
import { Box, Button, Divider } from '@mui/material';
import React, { useState } from 'react'
import GettingRecipe from './GettingRecipe';
import InitialRun from './InitialRun';
import NoSelectedItems from './NoSelectedItems';

const StyledChartBox = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '7px',
    gridColumn: '3 / span 2',
    width: '30%',
    height: '56.4vh',
    display: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
export default function RecipeGenerator({displayRecipe, handleDisplayRecipe, prevSelectedItems }) {
  const query = prevSelectedItems.map(item => item.toLowerCase()).join('+');
  const [trigger, setTrigger] = useState(false);
  function handleGenerate(){
    handleDisplayRecipe();
    setTrigger(trigger => !trigger);
  }
  return (
    <Box sx={StyledChartBox}>
        <Box sx={{display: 'flex',justifyContent: 'center'}}>
          <Button sx={{mt: '5px', border: '1px solid black'}} onClick={handleGenerate}>
            Generate
          </Button>
        </Box>
        <Divider sx={{bgcolor: 'black', mt: '5px', pt: '1px', mb: '15px'}}/>
        {prevSelectedItems.length === 0 && !displayRecipe && <InitialRun/>}
        {displayRecipe && prevSelectedItems.length === 0 && <NoSelectedItems/>}
        {displayRecipe && prevSelectedItems.length > 0 && <GettingRecipe query={query} trigger={trigger}/>}
        
    </Box>
  )
}
