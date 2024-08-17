import { Button } from "@mui/material";
import { FaCamera } from "react-icons/fa";
const StyledCaptureButton = {
    borderRadius: '50%', 
    p: '10px', 
    width: '20%', 
    height: '70%', 
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
export default function CameraButton({isCapture, captureImage}) {
  return (
    <Button variant="contained" sx={StyledCaptureButton} disabled={isCapture} onClick={captureImage}>
        <FaCamera size={25} color="black"/>
    </Button>
  )
}
