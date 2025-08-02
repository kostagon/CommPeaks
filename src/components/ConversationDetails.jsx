import React from 'react'
import ConversationInput from './ConversationInput'

export const ConversationDetails = ({ contact }) => {

    const getVariables = () => {
        let variables = { ...contact }
        delete variables.msgs
        delete variables.full_name
        return variables
    }

    const groupMessagesByDate = (msgs) => {
        const groups = {}

        msgs.forEach((msg) => {
            const date = new Date(msg.timestamp).toLocaleDateString('en-GB')
            if (!groups[date]) groups[date] = []
            groups[date].push(msg)
        });

        return groups;
    };

    const groupedMsgsByDate = groupMessagesByDate(contact.msgs)
    return (
        <div className="conversation-container">
            <div className="messages-wrapper">
                {Object.entries(groupedMsgsByDate).map(([date, msgs]) => (
                    <div key={date}>
                        <div className="date-separator">
                            <span className="date-label">{date}</span>
                        </div>
                        {msgs.map((msg, idx) => {
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
                ))}
            </div>
            <ConversationInput onSend={() => {
                console.log('On send conversationInput')
            }} variables={getVariables()} />
        </div>
    )
}


