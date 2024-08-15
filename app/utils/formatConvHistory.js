

export function formatConvHistory(messages) {
  return messages.map((message, index) => {
    if(index % 2 === 0){
        return `Human: ${message.content}`
    }else{
        return `Assisstant: ${message.content}`
    }
  });
}
