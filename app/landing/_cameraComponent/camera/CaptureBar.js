import { Box, Button } from "@mui/material";
import { FaCamera } from "react-icons/fa";

const StyledCaptureButton = {
  borderRadius: '50%', 
  p: '10px', 
  width: '60px', 
  height: '60px', 
  my: '7px',
  bgcolor: 'white',
  '&:hover': {
    backgroundColor: '#bab8b8',
  }
}
export default function CaptureBar() {
  return (
    <Box width='35vw' sx={{position: 'absolute', bottom: '15%', textAlign: 'center', bgcolor: 'black'}}>
                <Button variant="contained" sx={StyledCaptureButton}>
                  <FaCamera size={25} color="black"/>
                </Button>
              </Box>
  )
}
