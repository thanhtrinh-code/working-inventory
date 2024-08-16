import { Box, Button, Modal } from "@mui/material";
import { useRef, useState } from "react";
import CameraInstruction from "./instruction/CameraInstruction";
import Camera from "./camera/Camera";
import CaptureBar from "./camera/CaptureBar";


export default function CameraDisplay({openCamera, handleCloseCamera}) {
  const camera = useRef(null);
  const [numOfCameras, setNumOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const [ratio, setRatio] = useState(9/16);

  return (
    <Modal
        open={openCamera}
        onClose={handleCloseCamera}>
        <Box width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.5)'
        display='flex' justifyContent='center' alignItems='center'>
            <Box width='55vw' height='70vh' display='flex'>
              <Box bgcolor='tomato' width='20vw'>
                  <CameraInstruction handleCloseCamera={handleCloseCamera}/>
              </Box>
              <Box bgcolor='yellow' width='35vw' height='100%'>
                  <CaptureBar/>
              </Box>
            </Box>
        </Box>
    </Modal>
  )
}
