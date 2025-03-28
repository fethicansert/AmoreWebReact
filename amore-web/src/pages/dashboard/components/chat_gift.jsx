import React from 'react'

const ChatGift = ({message, isSender}) => {
    console.log(message);
    
  return (
    <div className='chat-gift' style={{ alignSelf: isSender ? 'flex-start' : 'flex-end' }}>
        <div className='chat-gift-image-container'>
                <img src={message.gift.url}/>
        </div>
    </div>
  )
}

export default ChatGift
