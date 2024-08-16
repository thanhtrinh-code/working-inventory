'use client'
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SignInTextAndDivider from "./_textSignin/SignInTextAndDivider";
import { signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {auth, provider} from '../../firebase';
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [signinEmail, setEmail] = useState('');
  const [signinPassword, setPassword] = useState('');
  const [error, setError] = useState('');
  async function handleSignIn(e){
    e.preventDefault();
    // Perform sign in logic here
    if(!signinEmail){
      setError('Email is required');
      return;
    }
    if(!signinPassword){
      setError('Password is required');
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, signinEmail, signinPassword
      );
      const user = userCredential.user;
      router.replace('/landing');
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/invalid-email":
          setError("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setError(
            "This email address is disabled by the administrator."
          );
          break;
        case "auth/user-not-found":
          setError("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setError("The password is invalid or the user does not have a password.")
          break;
        default:
          console.log(errorMessage);
          break;
      }
    }
    setError('');
  }
  async function handleGoogleSignIn(e){
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      router.replace('/landing');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
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
          Sign In
        </Typography>
          <input value={signinEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
          style={{width: '75%', height: '2.2rem', marginLeft: '35px', borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={signinPassword} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required
          style={{width: '75%', height: '2.2rem', marginLeft: '35px', marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <p style={{marginTop: 2, marginBottom: 0, marginLeft: '50px', fontSize: '15px', color: 'red'}}>
            {error && error}
          </p>
        </Box>
        <SignInTextAndDivider handleSignIn={handleSignIn}
        handleGoogleSignIn={handleGoogleSignIn}
        />
      </Box>
    </Box>
  )
}
