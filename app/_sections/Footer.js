import { Typography, Box, Divider } from '@mui/material';
import React from 'react';

const styleFooter = {
  backgroundColor: 'white', // Light background color
  color: '#6c757d', // Subtle text color
  padding: '20px',
  textAlign: 'center',
  marginTop: '15px',
  bottom: 0,
  position: 'fixed',
  width: '100%',
  boxSizing: 'border-box',
};

const styleText = {
  fontSize: '14px',
  lineHeight: '2',
};

export default function Footer() {
  return (
    <footer style={styleFooter}>
      <Typography sx={styleText}>
        Terms Policy & Conditions | Contact Us | Help Center
      </Typography>
    </footer>
  );
}
