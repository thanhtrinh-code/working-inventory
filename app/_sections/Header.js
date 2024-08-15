"use client"
import { Box, Button, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import {GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {auth, provider} from "@/firebase";


const StyleHeader = {
    bgcolor: 'white',
    display: 'flex',
    p: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    
}
const StyleMenus = {
    display: 'flex',
    gap: '8px',
    mr: '1rem'

}
const StyleGetStarted = {
    bgcolor: 'black', 
    borderRadius: '16px',
    '&:hover': {
        backgroundColor: '#4d4c49',
        color: 'white',
      },

}
const StylesSignIn = {
    bgcolor: 'white', 
    color: 'black', 
    borderRadius: '16px',
    border: '1px solid grey',
    '&:hover': {
        backgroundColor: '#bfbeba',
        color: 'white',
      },
}
export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    
    function handleNext(){
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            localStorage.setItem('token', token);
            const user = result.user;
            router.push('/landing');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customerData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
    };
    function handleSignUp(){
        router.push('/signup');
    }
    function handleSignOut(){
        signOut(auth).then(() => {
            localStorage.removeItem('token');
            router.push('/')
        }).catch((error) => {
            console.error('Sign Out Failed:', error);
        });
    }

  return (
    <Box sx={StyleHeader}>
        <Box>

        <Typography variant='h5' sx={{fontFamily: 'serif', color: 'black', pl: '4rem'}}>
        Inventory Management System
        </Typography>

        </Box>

        <Box sx={StyleMenus}>
            {pathname === '/' && (
            <>
                <Button variant='outlined' sx={StylesSignIn} onClick={handleNext}>
                    Sign In
                </Button>
                <Button variant='contained' sx={StyleGetStarted} onClick={handleSignUp}>
                    Get Started
                </Button>
            </>
            )}
            {pathname === '/landing' && (
                <Button variant='contained' sx={StyleGetStarted} onClick={handleSignOut}>
                    Sign Out
                </Button>
            )}
            {
                pathname === '/signup' && (
                    <>
                <Button variant='outlined' sx={StylesSignIn} onClick={handleNext}>
                    Sign In
                </Button>
                <Button variant='contained' sx={StyleGetStarted} onClick={() => router.push('/')}>
                    Back To Home Page
                </Button>
            </>
                )
            }
        </Box>
    </Box>
  )
}
