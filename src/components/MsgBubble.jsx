import React from 'react'
import { formatDateTo24HourMode } from '../services/util.service';

function MsgBubble({ message, index, phone }) {
    const isMe = message.sender === 'me';

    return (
        <div key={`${phone}-${index}`} className={`message-row ${isMe ? 'me' : 'other'}`}>
            <div className="message-bubble flex column gap-3">
                <div>
                    {message.text}
                </div>
                <div className="flex-end">
                    Sent: {formatDateTo24HourMode(message.timestamp)}
                </div>
            </div>
        </div>
    );

}

export default MsgBubble