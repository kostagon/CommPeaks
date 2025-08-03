import React, { useEffect, useRef } from 'react'
import MsgBubble from "./MsgBubble";

function MsgsByDate({ msgsByDate }) {
    const endOfMessagesRef = useRef()
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView()
    }, [msgsByDate])
    return (
        <div className="messages-wrapper">
            {
                Object.entries(msgsByDate).map(([date, messages]) => (
                    <div key={date}>
                        <div className="date-separator">
                            <span className="date-label">
                                {date}
                            </span>
                        </div>
                        {messages.map((msg, idx) => (
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