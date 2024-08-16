import { Box, Modal } from "@mui/material";
import CameraInstruction from "./instruction/CameraInstruction";
import CaptureBar from "./camera/CaptureBar";
import { useRef, useState } from "react";
import { Camera } from "react-camera-pro";


export default function CameraDisplay({openCamera, handleCloseCamera}) {
  const [begin, setBegin] = useState(false);
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

  const [myFoto, setMyFoto] = useState('');

  function handleBegin() {
    setBegin(toggle => !toggle);
    setNumberOfCameras(0);
    setImage(null);
    camera.current = null;
  }
  function handleCapture(){
    const imageSrc = camera.current.takePhoto(); 
  }
  return (
    <Modal
        open={openCamera}
        onClose={handleCloseCamera}>
        <Box width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.5)'
        display='flex' justifyContent='center' alignItems='center'>
            <Box width='55vw' height='70vh' display='flex'>
              <Box bgcolor='tomato' width='20vw'>
                  <CameraInstruction handleCloseCamera={handleCloseCamera} handleBegin={handleBegin} begin={begin}
                  handleCapture={handleCapture}
                  />
              </Box>
              <Box bgcolor="yellow" width="35vw" height="100%" display="flex" flexDirection="column">
              <Box bgcolor="black" flexGrow={1} position="relative">
                {begin && ( <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} facingMode="user" style={{ position: 'absolute', width: '100%', height: '100%' }} // Camera fills the green box
                />)}
                {image && (
                  <img src={image} alt="Image" style={{ width: '100%', height: '100%' }} />
                )}
            </Box>
          </Box>
            </Box>
        </Box>
    </Modal>
  )
}
