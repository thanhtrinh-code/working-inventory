import { Box, Button } from '@mui/material'
import { IoMdCloseCircle } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

const StyledBeginButton = {
  borderRadius: 15,
  backgroundColor: '#246019',
  color: 'white',
  fontSize: '15px',
  padding: '8px 15px',
  '&:hover': {
    backgroundColor: '#298a17',
  }
}
const StyledStopButton = {
  borderRadius: 15,
  backgroundColor: '#ff051a',
  color: 'white',
  fontSize: '15px',
  padding: '8px 15px',
  '&:hover': {
    backgroundColor: '#ff0000',
  }
}
const StyledViewImageButton = {
  borderRadius: 15,
  backgroundColor: '#e39533',
  color: 'white',
  fontSize: '15px',
  padding: '8px 15px',
  '&:hover': {
    backgroundColor: '#f79c2a',
  }
}
const StyledCaptureButton = {
  borderRadius: '50%', 
  p: '10px', 
  width: '60px', 
  height: '60px', 
  mt: '15px',
  bgcolor: 'white',
  '&:hover': {
    backgroundColor: '#bab8b8',
  },
  '&.Mui-disabled': {
    backgroundColor: 'grey.400', // Background color when disabled
    color: 'white',              // Text color when disabled
  },
}
export default function CameraInstruction({handleCloseCamera, handleBegin, begin, handleCapture}) {
  async function testing(){
    const res = await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Hello, World!' })
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <Box>
      <Box display='flex' justifyContent='flex-start' pt='7px' pl='7px'>
        <IoMdCloseCircle size={23} color='black' onClick={handleCloseCamera} style={{cursor: 'pointer'}}/>
      </Box>
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
        <h2 style={{marginBottom: 0, fontFamily: 'georgia'}}>
          Instruction
        </h2>
        <p style={{fontFamily: 'georgia', marginLeft: '10px'}}>
            To add a camera to your inventory, hold the object you want in front of your camera and press the camera icon
        </p>
        <p style={{fontFamily: 'georgia', marginLeft: '10px'}}>
            To view your captured image, click on the 'View Image' button.
        </p>
        <h4 style={{fontFamily: 'georgia', marginTop: '5px', marginLeft: '10px'}}>
            To start, click on begin button.
        </h4>
        <Box display='flex' gap='10px'>
          {!begin && <Button variant="contained" sx={StyledBeginButton} onClick={handleBegin}>
              Begin
          </Button>}
          {begin && <Button variant="contained" sx={StyledStopButton} onClick={handleBegin}>
              Stop
          </Button>}
          <Button variant='contained' sx={StyledViewImageButton} onClick={testing}>
              View Image
          </Button>
        </Box>
        <Button variant="contained" sx={StyledCaptureButton} disabled={!begin} onClick={handleCapture}>
                  <FaCamera size={25} color="black"/>
                </Button>
    </Box>
    </Box>
  )
}
