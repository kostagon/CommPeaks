import MsgBubble from "./MsgBubble";

function MsgsByDate({ msgsByDate }) {
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
        </div>
    );
}

export default MsgsByDate