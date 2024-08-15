import { Box, Modal, Stack } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import NoChat from './NoChat';
import FormMessageInput from './FormMessageInput';
import ChatBotHeader from './ChatBotHeader';
import ChatMessage from './ChatMessage'
import {addItemToInventory} from '@/app/_components/SearchField';


export default function ChatBot({ openChat, handleCloseChat }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [prevConv, setPrevConv] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  async function sendMessage(e) {
    e.preventDefault();
    if(!message.trim()) return;
    setIsLoading(true);
    const [command, itemName, department, quantity] = message.split(' ');
    if(command.toLowerCase() === 'add' && itemName && department && quantity){
      const item = {itemName, department, quantity};
      await addItemToInventory(item);
      setIsLoading(false);
      setMessage('');
      const userMessage = {
        role: 'user',
        content: message,
      }
      setMessages((prevMsg) => [
        ...prevMsg,
        userMessage,
        {role: 'assistant', content: 'Item added to inventory'},
      ]);
      setPrevConv((prevHistory) => [
        ...prevHistory,
        userMessage,
        {role: 'assistant', content: 'Item added to inventory'},
      ]);
      return;
    }

    setMessage('');
    const userMessage = {
      role: 'user',
      content: message,
    }
    setMessages((prevMsg) => [
      ...prevMsg,
      userMessage,
      {role: 'assistant', content: "..."}
    ]);
    setPrevConv((prevHistory) => [
      ...prevHistory,
      {role: 'user', content: message},
    ]);
    try {
      const res = await fetch('/api/main', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({question: message, conv_history: prevConv}),
      });
      if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      
      setPrevConv((prevHistory) => [
        ...prevHistory,
        {role: 'assistant', content: data.answer},
      ]);
      setMessages((prevMsg) => [
       ...prevMsg.slice(0, -1),
        {role: 'assistant', content: data.answer},
      ]);
    } catch (error) {
      console.error('Error while sending message:', error);
      setMessages((prevMsg) => [
        ...prevMsg.slice(0, -1),
        {role: 'assistant', content: 'I am sorry, but I encountered an error. Please try again later.'},
      ])
    }finally{
      setIsLoading(false);
      scrollToBottom();
    }
  }
  function handleCloseNotSave(){
    setMessage('');
    setIsLoading(false);
    setMessages([]);
    setPrevConv([]);
    handleCloseChat();
  }
  function clearMessage(){
    setMessage('');
  }
  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }
  return (
    <Modal
      open={openChat}
      onClose={handleCloseChat}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        width='100vw'
        height='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Background color for the modal
      >
        <Stack
          direction='column'
          width='600px'
          height='700px'
          border='1px solid black'
          p={2}
          spacing={3}
          sx={{ backgroundColor: 'background.paper' }} // Background color for the chat container
        >
          <ChatBotHeader handleCloseChat={handleCloseChat} handleCloseNotSave={handleCloseNotSave}/>
          <Stack
            direction='column'
            spacing={2}
            flexGrow={1}
            overflow='auto'
            maxHeight='100%'
          >
            {messages.length > 0 ?
             <ChatMessage messages={messages}/> : <NoChat/>
            }
            <div ref={messagesEndRef}/>
          </Stack>
          <FormMessageInput sendMessage={sendMessage} message={message}
          clearMessage={clearMessage} handleChangeMessage={handleChangeMessage}
          isLoading={isLoading}
          />
        </Stack>
      </Box>
    </Modal>
  );
}
