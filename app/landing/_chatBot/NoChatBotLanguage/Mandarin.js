import { Box } from "@mui/material";

export default function Mandarin() {
  return (
    <Box display='flex' flexDirection='column' width={400}>
            
            <h5 style={{textAlign: 'center', marginBottom: '0px', fontFamily: 'new century schoolbook', fontSize: '16px'}}>
                嘿✋，我是一个乐于助人的人工智能聊天机器人，旨在帮助您回答有关营养和饮食的任何问题。
            </h5> 
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '5px',  fontFamily: 'palatino', fontSize: '14px'}}>
                随时问我你的饮食、锻炼习惯  或任何其他与健康相关的问题。
            </p>
            
            <p style={{textAlign: 'center', marginTop: '10px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                我也可以通过命令添加 &quot;add&quot;, 和 &quot;delete&quot; 其次是姓名、部门、​​数量。
            </p>
            <p style={{textAlign: 'center', marginTop: '5px', marginBottom: '0px',  fontFamily: 'palatino', fontSize: '13px'}}>
                Ex: &quot;add 牛奶 杂货店 4&quot; 
            </p>
            <h2 style={{textAlign: 'center', marginTop: '15px', fontFamily: 'Stencil std'}}>
                开始输入以查看聊天。
            </h2>
        </Box>
  )
}
