"use client"
import { Box, Button, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import {onAuthStateChanged, signOut } from 'firebase/auth';
import {auth, db} from "@/firebase";
import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';





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
    const [user, setUser] = useState(null);
    function handleSignOut(){
        signOut(auth).then(() => {
            router.push('/')
        }).catch((error) => {
            console.error('Sign Out Failed:', error);
        });
    }
    if (pathname === '/landing') {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const userDocRef = doc(db, 'users', user.uid); // Use `user.uid` instead of `auth.currentUser.uid`
              getDoc(userDocRef)
                .then((docSnap) => {
                  if (docSnap.exists()) {
                    setUser(docSnap.data());
                  } else {
                    console.log('No such document!');
                  }
                })
                .catch((error) => {
                  console.error('Error getting document:', error);
                });
            } else {
              console.log('No user is signed in.');
            }
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
                <Button variant='outlined' sx={StylesSignIn} onClick={() => router.push('/signin')}>
                    Sign In
                </Button>
                <Button variant='contained' sx={StyleGetStarted} onClick={() => router.push('/signup')}>
                    Get Started
                </Button>
            </>
            )}
            {pathname === '/landing' && (
                <>
                <p>
                    Hi, {user?.username || ""}
                </p>
                <Button variant='contained' sx={StyleGetStarted} onClick={handleSignOut}>
                    Sign Out
                </Button>
                </>
            )}
            {
                pathname === '/signup' && (
                    <>
                <Button variant='outlined' sx={StylesSignIn} onClick={() => router.push('/signin')}>
                    Sign In
                </Button>
                <Button variant='contained' sx={StyleGetStarted} onClick={() => router.push('/')}>
                    Back To Home Page
                </Button>
            </>
                )
            }
            {
                pathname === '/signin' && (
                    <>
                <Button variant='outlined' sx={StylesSignIn} onClick={() => router.push('/signup')}>
                    Sign Up
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
