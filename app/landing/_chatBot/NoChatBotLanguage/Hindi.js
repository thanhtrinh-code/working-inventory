import { Box } from "@mui/material";


export default function Hindi() {
  return (
    <Box display='flex' flexDirection='column' width={400}>
            
            <h5 style={{textAlign: 'center', marginBottom: '0px', fontFamily: 'new century schoolbook', fontSize: '16px'}}>
                हेलो ✋, मैं एक सहायक एआई चैटबॉट हूं जो पोषण और आहार के बारे में किसी भी प्रश्न का उत्तर देने में आपकी मदद करने के लिए डिज़ाइन किया गया है।
            </h5> 
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '5px',  fontFamily: 'palatino', fontSize: '14px'}}>
                कृपया मुझसे अपने भोजन, व्यायाम दिनचर्या, या किसी भी अन्य स्वास्थ्य संबंधी प्रश्न पूछने में संकोच न करें।
            </p>
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                मैं कमांड द्वारा भी जोड़ सकता हूं &quot;add&quot; और &quot;delete&quot; उसके बाद नाम, विभाग, मात्रा का विवरण दिया जाएगा।
            </p>
            <p style={{textAlign: 'center', marginTop: '5px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                उदाहरण: &quot;add दूध किराना 4&quot; 
            </p>
            <h2 style={{textAlign: 'center', marginTop: '15px', fontFamily: 'Stencil std'}}>
                चैट देखने के लिए टाइप करना प्रारंभ करें.
            </h2>
        </Box>
  )
}
