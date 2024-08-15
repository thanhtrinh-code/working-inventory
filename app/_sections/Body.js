"use client"
import {Typography} from "@mui/material";
import { useState } from "react";
export default function Body() {
    
  return (
    <>
        <Typography variant="h3" sx={{
            pb: '25px',
            fontFamily: 'Times New Roman',
            fontWeight: 'bold',
            lineHeight: '1.1',
            }}>
            Don &apos; t know what is in your inventory? <br/>
            Welcome to the Inventory Management System!
        </Typography>
        <Typography variant="h5" sx={{
            pb: '1rem',
            fontFamily: 'Optima'
            }}>
            Make it easy to find and track your inventory.
        </Typography>
    </>
  )
}
