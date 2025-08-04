import React from 'react'
import ConversationInput from './ConversationInput'
import MsgsByDate from './MsgsByDate'

function ConversationDetails({ contact, onAddMsg }) {
    const getVariables = () => {
        let variables = { ...contact }
        delete variables.msgs
        delete variables.fullName
        return variables
    }

    const groupMsgsByDate = (msgs) => {
        const groups = {}

        msgs.forEach((msg) => {
            const date = new Date(msg.timestamp).toLocaleDateString('en-GB')
            if (!groups[date]) groups[date] = []
            groups[date].push(msg)
        })

        return groups
    }

    const groupedMsgsByDate = groupMsgsByDate(contact.msgs)
    return (
        <div className="conversation-container">
            <MsgsByDate msgsByDate={groupedMsgsByDate} />
            <ConversationInput
                onAddMsg={onAddMsg} variables={getVariables()} />
        </div >
    )
}


export default ConversationDetails