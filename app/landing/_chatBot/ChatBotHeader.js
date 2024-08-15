import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CgBorderStyleSolid } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
export default function ChatBotHeader({handleCloseChat, handleCloseNotSave}) {
  return (
    <Box bgcolor='tomato' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          p: '15px', border: '1px solid black', borderRadius: '10px'}}>
            <Image src='/ai.png' alt='AI' width={30} height={30}
            style={{ marginRight: '10px', borderRadius: '5px' }} // Add margin and rounded corners
              />
            <Typography rx={{display: 'flex', bgcolor: 'tomato', alignItems: 'center'}} style={{fontSize: '20px', fontFamily: 'georgia'}}>
              Nutrionist AI Support
            </Typography>
            <Box>
              <CgBorderStyleSolid size={23} color='black' style={{cursor: 'pointer', marginRight: '15px'}} onClick={handleCloseChat}/>
              <IoMdCloseCircle size={23} color='black' onClick={handleCloseNotSave} style={{cursor: 'pointer'}}/>
            </Box>
          </Box>
  )
}
