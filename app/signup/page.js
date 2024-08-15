"use client"
import { Box, Typography } from "@mui/material";

import MyButtonAndDivider from "./_textSignUp/MyButtonAndDivider";
import { useState } from "react";


export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  function handleSubmit(e){
    e.preventDefault();
    // Perform sign up logic here
    console.log(username);
    if(!username){
      setError('Username is required');
      return;
    }
    if(!password){
      setError('Password is required');
      return;
    }
    if(!confirmPassword){
      setError('Confirm Password is required');
      return;
    }
    if(!email){
      setError('Email is required');
      return;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setError('Invalid email address');
      return;
    }
    if(password !== confirmPassword){
      setError('Passwords do not match');
      return;
    }
    setError('');
  }

  return (
    <Box height='85vh' width='100%' display='flex'
    justifyContent='center' alignItems='center' sx={{backgroundImage: 'url(/background.jpg)'}}
    >
      <Box height='50vh' width='50vw' bgcolor='#bec5d1' display='flex'
      flexDirection='row' sx={{opacity: 0.8, borderRadius: 10}}
      >
        <Box height='100%' width='50%' display='flex' flexDirection='column' gap='10px' justifyContent='center'> 
        <Typography variant="h4" 
        sx={{fontWeight: 'bold', fontFamily: 'times', ml: '35px', mb: '10px'}}>
          Sign Up
        </Typography>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"
          style={{width: '75%', height: '2.2rem', marginLeft: '35px',marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"
          style={{width: '75%', height: '2.2rem', marginLeft: '35px', marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password"
          style={{width: '75%', height: '2.2rem', marginLeft: '35px',  marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" 
          style={{width: '75%', height: '2.2rem', marginLeft: '35px', borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <p style={{marginTop: 2, marginBottom: 0, marginLeft: '50px', fontSize: '15px', color: 'red'}}>
            {error && error}
          </p>
        </Box>
          <MyButtonAndDivider handleSubmit={handleSubmit}/>
      </Box>
    </Box>
  )
}
