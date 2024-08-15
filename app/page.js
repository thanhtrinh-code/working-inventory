import { Box, Container } from "@mui/material";
import Body from "./_sections/Body";
import Header from "./_sections/Header";
import Image from "next/image";

const StyledBody = {
  bgcolor: 'white',
  height: '90vh',
  mt: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}
const StyledImage = {
  height: '37vh',
  width: '65vh',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
}
// Home Screen
export default function Page() {
  return (
    <>
      <Container>
        <Box sx={StyledBody}>
          <Body/>
          <Image width={500} height={500} src='/headPage.jpg' alt='Head Page Image' style={StyledImage}/>
        </Box>
      </Container>
    </>
  );
}
