import { Box } from '@mui/material'
import English from './NoChatBotLanguage/English'
import Hindi from './NoChatBotLanguage/Hindi'
import Spanish from './NoChatBotLanguage/Spanish'
import Mandarin from './NoChatBotLanguage/Mandarin'
import Vietnamese from './NoChatBotLanguage/Vietnamese'


export default function NoChat({language}) {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight="97%">
        {language === 'english' && <English/>}
        {language === 'hindi' && <Hindi/>}
        {language === 'spanish' && <Spanish/>}
        {language === 'mandarin' && <Mandarin/>}
        {language === 'vietnamese' && <Vietnamese/>}
    </Box>
  )
}
