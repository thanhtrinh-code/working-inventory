import { Box, Button, Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function MyButtonAndDivider({handleSubmit, handleGoogleSignUp}) {
  return (
    <Box height='100%' width='50%' alignContent='center' >
      <form style={{width:'100%', display:'flex', justifyContent:'center'}}
      onSubmit={handleSubmit}
      >
      <Button variant="contained" textalign='center' type="submit"
      sx={{width: '75%', mt: '20px', 
    backgroundColor: '#5009d8', fontSize: '15px', fontWeight: 'bold',
    '&:hover': {backgroundColor: '#5607ed', cursor: 'pointer', color: 'white'}}}>
        Sign Up
      </Button>
    </form>
    <p style={{textAlign: 'center', fontSize: '17px', fontFamily: 'optima'}}>
      Already have an account? <a href="/signin" style={{textDecoration: 'none', color: '#084dc4'}}>Sign In</a>
    </p>
    <Divider orientation="horizontal" flexItem variant="middle" textAlign="center">
    Or
    </Divider>
    <Box width='100%' display='flex' justifyContent='center'>
      <Button variant="contained" onClick={handleGoogleSignUp} disabled={true}
      sx={{mt: '15px', color: 'white', backgroundColor: '#5009d8', 
    '&:hover': {backgroundColor: '#5607ed', cursor: 'pointer', color: 'white'}
    }}>
        <FcGoogle size={30} style={{marginRight: '4px'}}/> Sign Up With Google
      </Button>
    </Box>
  </Box>
  )
}

