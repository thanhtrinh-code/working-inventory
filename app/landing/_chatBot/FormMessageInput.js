import { Button, TextField } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
export default function FormMessageInput({sendMessage, clearMessage, 
    handleChangeMessage, message, isLoading
}) {
  return (
    <form style={{display: 'flex', gap:'4px'}} onSubmit={sendMessage}>
            <Button variant='contained' title="Clear"
            onClick={clearMessage}
            sx={{bgcolor: 'white', color: 'black', 
              '&:hover': {
                backgroundColor: '#4d4c49',
                color: 'white',
              }, minWidth: '15px',
              borderRadius: 20,
              }}>
              <FaRegTrashAlt size={20}/>
            </Button>
            <TextField
              label='Message'
              fullWidth
              value={message}
              onChange={handleChangeMessage}
              sx={{ backgroundColor: 'background.default' }} // Background color for the text field
            />
            <Button variant='contained' type='submit' title="Send Message"
            disabled={isLoading}
            sx={{bgcolor: 'white', color: 'black', 
              '&:hover': {
                backgroundColor: '#4d4c49',
                color: 'white',
              }, minWidth: '30px',
              borderRadius: 20,
              }}>
              <IoIosSend size={25} />
            </Button>
    </form>
  )
}
