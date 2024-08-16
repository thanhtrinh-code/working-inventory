"use client"
import Inventory from "../_sections/Inventory";
import SearchField from "../_components/SearchField";
import { Box, Container} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase';



const StyledBody = {
    bgcolor: 'white',
    height: '10vh',
    mt: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }

export default function Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(!user){
        router.push('/signin');
      }else{
        setIsAuthenticated(true);
      }
      setLoading(false);
    })
    return () => unsubscribe();
  }, [router]);
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <>
      <Container>
        {isAuthenticated ? <Box sx={StyledBody}>
          <SearchField/>
        </Box> : null}
      </Container>
      {isAuthenticated ? <Inventory/> : null }
    </>
  )
}
