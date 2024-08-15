import { Box, MenuItem, Select, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
export default function ChatBotHeader({handleCloseChat, handleCloseNotSave}) {
  const [language, setLanguage] = useState('english');
  return (
    <>
    <Box bgcolor='tomato' sx={{border: '1px solid black', borderRadius: '10px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          px: '15px', pt: '10px', mb: '3px'}}>
            <Image src='/ai.png' alt='AI' width={35} height={35}
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
            <Box display='flex' justifyContent='center' height={40}>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)}
            sx={{border: '2px solid black', borderRadius: '7px', backgroundColor: 'white', 
            mb: '5px', width: '150px', color: 'black', fontSize: '16px', mt: '5px', fontFamily: 'times'}}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              <MenuItem value="mandarin">Mandarin</MenuItem>
              <MenuItem value="hindi">Hindi</MenuItem>
              </Select>
            </Box>
          </Box>
    </>
  )
}
