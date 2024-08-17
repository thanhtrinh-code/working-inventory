import { Box, Button } from "@mui/material";

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
const StyledResetButton = {
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
  },
  '&.Mui-disabled': {
    backgroundColor: '#e39533', // Background color when disabled
    color: 'white',              // Text color when disabled
  },
}
export default function BeginAndReset({begin, openCamera, reset, isSavedImage, savedImage}) {
  return (
    <Box display='flex' gap='10px'>
          {begin && <Button variant="contained" sx={StyledBeginButton} onClick={openCamera}>
              Begin
          </Button>}
          {!begin && <Button variant="contained" sx={StyledResetButton} onClick={reset}>
              Reset
          </Button>}
          <Button variant='contained' sx={StyledViewImageButton} onClick={savedImage} disabled={isSavedImage}>
              Save Image
          </Button>
        </Box>
  )
}
