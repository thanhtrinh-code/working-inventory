"use client"
import Inventory from "../_sections/Inventory";
import SearchField from "../_components/SearchField";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


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
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      router.push('/'); // Redirect to home page
    }
  }, [router]);
  if (!isAuthenticated) {
    return null; // Render nothing while redirecting
  }
  return (
    <>
      <Container>
        <Box sx={StyledBody}>
          <SearchField/>
        </Box>
      </Container>
      <Inventory/>
    </>
  )
}
