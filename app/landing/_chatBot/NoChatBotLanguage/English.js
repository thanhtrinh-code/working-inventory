import { Box } from '@mui/material'

export default function English() {
  return (
    <Box display='flex' flexDirection='column' width={400}>
            
            <h5 style={{textAlign: 'center', marginBottom: '0px', fontFamily: 'new century schoolbook', fontSize: '16px'}}>
                Hey there ✋, I am a helpful AI chatbot designed to help you answer any questions about nutrition and diet.
            </h5> 
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '5px',  fontFamily: 'palatino', fontSize: '14px'}}>
                Feel free to ask me about your meals, exercise routines, <br/> or any other health-related questions.
            </p>
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                I can also add by command &quot;add&quot;, and &quot;delete&quot; followed by the name, department, quantity.
            </p>
            <p style={{textAlign: 'center', marginTop: '5px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                Ex: &quot;add Milk Grocery 4&quot; 
            </p>
            <h2 style={{textAlign: 'center', marginTop: '15px', fontFamily: 'Stencil std'}}>
                Start typing to see the chat.
            </h2>
        </Box>
  )
}
