import React from 'react'
import Avatar from './Avatar'

function ConversationHeader({ fullName }) {
    return (
        <div className="conversation-header flex align-center justify-center">
            <Avatar fullName={fullName} />
            <span className="bold">
                {fullName}
            </span>
        </div>
    )
}


export default ConversationHeader