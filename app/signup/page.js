"use client"
import { Box, Typography } from "@mui/material";
import MyButtonAndDivider from "./_textSignUp/MyButtonAndDivider";
import { useState } from "react";
import {createUserWithEmailAndPassword, updateProfile, signInWithPopup} from 'firebase/auth';
import {auth, provider} from '../../firebase';
import { useRouter } from "next/navigation";
import {db} from '../../firebase';
import { doc, setDoc } from "firebase/firestore";



export default function Page() {
  const router = useRouter();
  const [username, setUsername] = useState('thanh');
  const [password, setPassword] = useState('123456');
  const [email, setEmail] = useState('thanht24@uw.edu');
  const [confirmPassword, setConfirmPassword] = useState('123456');
  const [error, setError] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    // Perform sign up logic here
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
      return ;
    }
    if(!email){
      setError('Email is required');
      return ;
    } 
    if(password !== confirmPassword){
      setError('Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,email, password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
      });
      console.log('User account created & signed in!');
      router.push('/signin');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/weak-password":
          setError("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          setError(
            "This email address is already in use by another account."
          );
        case "auth/invalid-email":
          setError("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          setError("Email/password accounts are not enabled.");
          break;
        default:
          console.log(errorMessage);
          break;
      }
    }
  }
  async function handleGoogleSignUp(e){
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
          Sign Up
        </Typography>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"
          style={{width: '75%', height: '2.2rem', marginLeft: '35px',marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" minLength='6'
          style={{width: '75%', height: '2.2rem', marginLeft: '35px', marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" minLength='6'
          style={{width: '75%', height: '2.2rem', marginLeft: '35px',  marginBottom: '3px' ,borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" 
          style={{width: '75%', height: '2.2rem', marginLeft: '35px', borderRadius: 20, paddingLeft: '20px', fontSize: '15px'}}/>
          <p style={{marginTop: 2, marginBottom: 0, marginLeft: '50px', fontSize: '15px', color: 'red'}}>
            {error && error}
          </p>
        </Box>
          <MyButtonAndDivider handleSubmit={handleSubmit} handleGoogleSignUp={handleGoogleSignUp}/>
      </Box>
    </Box>
  )
}
