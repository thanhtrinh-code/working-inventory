import { Box } from "@mui/material";
import { FaRobot } from "react-icons/fa";


export default function ChatMessage({messages}) {
  return (
    (messages?.map((msg, i) => (
        <Box key={i} display='flex' justifyContent={msg?.role === 'assistant' ? 'flex-start' : 'flex-end'}>
          {msg?.role === 'assistant' && (
          <Box display='flex' alignItems='center' mr='5px'>
            <FaRobot size={30}/>
          </Box>
          )}
          <Box
            bgcolor={msg?.role === 'assistant' ? '#aeb5b1' : '#2cc97b'}
            color={msg?.role === 'assistant' ? 'black' : 'white'}
            borderRadius={2}
            p={2}
            mr={msg?.role === 'assistant' ? '0' : '6px'}
            maxWidth={msg?.role  === 'assistant'? '25rem' : 'unset'}
          >
            <p style={{marginTop: 0, marginBottom: 0, fontFamily: 'georgia'}}>
              {msg?.content}
            </p>
          </Box>
        </Box>
      )))
  )
}
