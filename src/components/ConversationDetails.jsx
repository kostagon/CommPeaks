import React from 'react'
import ConversationInput from './ConversationInput'

export const ConversationDetails = ({ contact }) => {
    let variables = { ...contact }
    delete variables.msgs

    return (
        <div className="conversation-container">
            <div className="messages-wrapper">
                {contact.msgs.map((msg, idx) => {
                    const isMe = msg.sender === 'me'

                    return (
                        <div
                            key={'' + msg.phone + idx}
                            className={`message-row ${isMe ? 'me' : 'other'}`}
                        >
                            <div className="message-bubble">
                                {msg.text}
                            </div>
                        </div>
                    )
                })}
            </div>
            <ConversationInput onSend={() => {
                console.log('On send conversationInput')
            }} variables={variables} />
        </div>
    )
}


