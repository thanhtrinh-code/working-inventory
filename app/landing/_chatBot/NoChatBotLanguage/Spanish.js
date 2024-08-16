import { Box } from "@mui/material";


export default function Spanish() {
  return (
    <Box display='flex' flexDirection='column' width={400}>
            
            <h5 style={{textAlign: 'center', marginBottom: '0px', fontFamily: 'new century schoolbook', fontSize: '16px'}}>
                Hola ✋, soy un útil chatbot de IA diseñado para ayudarte a responder cualquier pregunta sobre nutrición y dieta.
            </h5> 
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '5px',  fontFamily: 'palatino', fontSize: '14px'}}>
                No dudes en preguntarme sobre tus comidas, rutinas de ejercicios, o cualquier otra pregunta relacionada con la salud.
            </p>
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                También puedo agregar por comando &quot;add&quot;, y &quot;delete&quot; seguido del nombre, departamento, cantidad.
            </p>
            <p style={{textAlign: 'center', marginTop: '5px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                Ejemplo: &quot;add Leche Comestibles 4&quot; 
            </p>
            <h2 style={{textAlign: 'center', marginTop: '15px', fontFamily: 'Stencil std'}}>
                Comience a escribir para ver el chat.
            </h2>
        </Box>
  )
}
