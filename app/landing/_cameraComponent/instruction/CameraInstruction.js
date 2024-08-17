import { Box } from '@mui/material'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';
import InstructionText from './InstructionText';
import BeginAndReset from './BeginAndReset';
import CameraButton from './CameraButton';




export default function CameraInstruction({handleCloseCamera, handleBegin, begin, handleCapture, handleReset, url}) {
  const [isSavedImage, setIsSavedImage] = useState(true);
  const [isCapture, setIsCapture] = useState(true);

  async function savedImage(){
    const res = await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: url })
    });
    const data = await res.json();
    console.log(data);
  }
  function openCamera(){
    setIsCapture(toggle =>!toggle);
    handleBegin();
  }
  function reset(){
    setIsCapture(true);
    setIsSavedImage(true);
    handleReset();
  }
  function captureImage(){
    setIsCapture(toggle =>!toggle);
    setIsSavedImage(toggle =>!toggle);
    handleCapture();
  }
  function closeCamera(){
    reset();
    handleCloseCamera();
  }
  return (
    <Box>
      <Box display='flex' justifyContent='flex-start' pt='7px' pl='7px'>
        <IoMdCloseCircle size={23} color='black' onClick={closeCamera} style={{cursor: 'pointer'}}/>
      </Box>
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
        <InstructionText/>
        <BeginAndReset begin={begin} reset={reset} openCamera={openCamera} isSavedImage={isSavedImage} savedImage={savedImage}/>
        <CameraButton isCapture={isCapture} captureImage={captureImage}/>
    </Box>
    </Box>
  )
}
