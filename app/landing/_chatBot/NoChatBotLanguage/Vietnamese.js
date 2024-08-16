import { Box } from "@mui/material";


export default function Vietnamese() {
  return (
    <Box display='flex' flexDirection='column' width={400}>
            
            <h5 style={{textAlign: 'center', marginBottom: '0px', fontFamily: 'new century schoolbook', fontSize: '16px'}}>
                Xin chào ✋, tôi là một chatbot AI hữu ích được thiết kế để giúp bạn trả lời mọi câu hỏi về dinh dưỡng và chế độ ăn uống.
            </h5> 
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '5px',  fontFamily: 'palatino', fontSize: '14px'}}>
                Hãy thoải mái hỏi tôi về bữa ăn, thói quen tập thể dục, <br/> hoặc bất kỳ câu hỏi nào khác liên quan đến sức khỏe.
            </p>
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                Tôi cũng có thể thêm bằng lệnh &quot;add&quot;, và &quot;delete&quot; theo sau là tên, phòng ban, số lượng.
            </p>
            <p style={{textAlign: 'center', marginTop: '5px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                Ví dụ: &quot;add Sữa Tạp Hóa 4&quot; 
            </p>
            <h2 style={{textAlign: 'center', marginTop: '15px', fontFamily: 'Stencil std'}}>
                Bắt đầu nhập để xem cuộc trò chuyện.
            </h2>
        </Box>
  )
}
