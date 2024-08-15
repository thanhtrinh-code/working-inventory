import { Box, Button, Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function SignInTextAndDivider({handleSignIn, handleGoogleSignIn  }) {
    return (
        <Box height='100%' width='50%' alignContent='center' >
          <form style={{width:'100%', display:'flex', justifyContent:'center'}}
          onSubmit={handleSignIn}
          >
          <Button variant="contained" textalign='center'type="submit"
          sx={{width: '75%', mt: '10px', 
        backgroundColor: '#5009d8', fontSize: '15px', fontWeight: 'bold',
        '&:hover': {backgroundColor: '#5607ed', cursor: 'pointer', color: 'white'}}}>
            Sign In
          </Button>
        </form>
        <p style={{textAlign: 'center', fontSize: '17px', fontFamily: 'optima'}}>
          Don&apos;t have an account? <a href="/signup" style={{textDecoration: 'none', color: '#084dc4'}}>Sign Up</a>
        </p>
        <Divider orientation="horizontal" flexItem variant="middle" textAlign="center">
        Or
        </Divider>
        <Box width='100%' display='flex' justifyContent='center'>
          <Button variant="contained" onClick={handleGoogleSignIn}
          sx={{mt: '10px', color: 'white', backgroundColor: '#5009d8', 
        '&:hover': {backgroundColor: '#5607ed', cursor: 'pointer', color: 'white'}
        }}>
            <FcGoogle size={30} style={{marginRight: '4px'}}/> Sign In With Google
          </Button>
        </Box>
      </Box>
      )
}
