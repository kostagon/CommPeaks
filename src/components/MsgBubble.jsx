import React from 'react'

function MsgBubble({ message, index, phone }) {

    const isMe = message.sender === 'me';
    return (
        <div key={`${phone}-${index}`} className={`message-row ${isMe ? 'me' : 'other'}`}>
            <div className="message-bubble">
                {message.text}
            </div>
        </div>
    );

}

export default MsgBubble