import { Box, Button } from '@mui/material'
import Display from '../_components/Display'
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { useState } from 'react';
import ChatBox from '../landing/_chatBot/ChatBot'

export default function Inventory() {
  const [openChat, setOpenChat] = useState(false);
  function handleCloseChat() {
    setOpenChat(false);
  }
  return (
    <>
    <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'space-between', mx: '20px', fontFamily: 'Georgia'}}>
        <h2>
            Recipe Generator
        </h2>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>

        <Button variant="contained" size='small' sx={{bgcolor: 'black'}} onClick={() => setOpenChat(chat => !chat)}>
          <HiMiniChatBubbleBottomCenterText size={22}/>
        </Button>
        <h3>
            Inventory Items
        </h3>
        </Box>
        
    </Box>
    <ChatBox openChat={openChat} handleCloseChat={handleCloseChat}/>
    <Display/>
    </>
  )
}
