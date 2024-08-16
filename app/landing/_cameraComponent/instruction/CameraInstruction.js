import { Box, Button } from '@mui/material'

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
export default function CameraInstruction({handleCloseCamera}) {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
        <h2 style={{marginBottom: 0, fontFamily: 'georgia'}}>
          Instruction
        </h2>
        <p style={{fontFamily: 'georgia', marginLeft: '10px'}}>
            To add a camera to your inventory, hold the object you want in front of your camera and press the 'Capture' button.
        </p>
        <p style={{fontFamily: 'georgia', marginLeft: '10px'}}>
            To view your captured image, click on the 'View Image' button.
        </p>
        <h4 style={{fontFamily: 'georgia', marginTop: '5px', marginLeft: '10px'}}>
            To start, click on begin button.
        </h4>
        <Box display='flex' gap='10px'>
          <Button variant="contained" sx={StyledBeginButton}>
              Begin
          </Button>
          <Button variant='contained' sx={StyledViewImageButton}>
              View Image
          </Button>
        </Box>
    </Box>
  )
}
