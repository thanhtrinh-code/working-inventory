import { Box, Modal } from "@mui/material";
import CameraInstruction from "./instruction/CameraInstruction";
import { useCallback, useRef, useState } from "react";
import Camera from "./camera/Camera";
import Photo from "./camera/Photo";


export default function CameraDisplay({openCamera, handleCloseCamera}) {
  const webcamRef = useRef(null);

  const [begin, setBegin] = useState(true);
  const [url, setUrl] = useState(null);

  function handleBegin() {
    setBegin(toggle => !toggle);
  }
  function handleReset(){
    setUrl(null);
    setBegin(true);
  }
  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);
  return (
    <Modal
        open={openCamera}
        onClose={handleCloseCamera}>
        <Box width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.5)'
        display='flex' justifyContent='center' alignItems='center'>
            <Box width='55vw' height='70vh' display='flex'>
              <Box bgcolor='tomato' width='20vw'>
                  <CameraInstruction handleCloseCamera={handleCloseCamera} handleBegin={handleBegin} begin={begin}
                  handleCapture={capture} handleReset={handleReset} url={url}/>
              </Box>
              <Box bgcolor="yellow" width="35vw" height="100%" display="flex" flexDirection="column">
                <Box bgcolor="black" flexGrow={1} position="relative">
                  {!begin && !url && <Camera webcamRef={webcamRef}/>}
                  {url && <Photo url={url}/>}
                </Box>
              </Box>
            </Box>
        </Box>
    </Modal>
  )
}
