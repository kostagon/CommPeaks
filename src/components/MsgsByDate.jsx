import React, { useEffect, useRef } from 'react'
import MsgBubble from "./MsgBubble";

function MsgsByDate({ msgsByDate }) {
    const endOfMessagesRef = useRef() // Required for instant scroll to the bottom of the conversation

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView()
    }, [msgsByDate])

    return (
        <div className="messages-container">
            {
                Object.entries(msgsByDate).map(([date, msgs]) => (
                    // Separating the messages by date
                    <div key={date}>
                        <div className="date-separator">
                            <span className="date-label">
                                {date}
                            </span>
                        </div>
                        {msgs.map((msg, idx) => (
                            <MsgBubble
                                key={`${msg.phone}-${idx}`}
                                message={msg}
                                index={idx}
                                phone={msg.phone}
                            />
                        ))}
                    </div>
                ))
            }
            <div ref={endOfMessagesRef} />
        </div>
    );
}

export default MsgsByDate