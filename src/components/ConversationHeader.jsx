import React from 'react'
import Avatar from './Avatar'
function ConversationHeader({ fullName }) {

    return (
        <div className="conversation-header blahhh flex align-center justify-center">
            <Avatar fullName={fullName} />
            <span>
                {fullName}
            </span>
        </div>
    )
}


export default ConversationHeader