import {Typography } from '@mui/material';
import React from 'react'

export default function RecipeCard({randomRecipe}) {
    if(!randomRecipe) return;
    const {label, image, calories, source, url } = randomRecipe;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <img 
        src={image} 
        alt={label}
        style={{width: '30vh', height: '100%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', marginBottom: '16px' }}
    />
    <Typography sx={{fontSize: '18px', fontWeight: 'bold'}}>Name: {label[0].toUpperCase() + label.slice(1)}</Typography>
    <Typography>Calories: {Math.floor(calories)}</Typography>
    <Typography>Source: {source}</Typography>
    <a href={url} style={{ marginTop: '8px' }}>View Recipe</a>
</div>
  )
}
