import React from 'react'
import Avatar from './Avatar'
import { formatIsoDateToLocaleDate } from '../services/util.service'

function ContactPreview({ contact, onSelectContact }) {
    const { msgs, full_name } = contact
    const lastMsgTime = formatIsoDateToLocaleDate(msgs[msgs.length - 1].timestamp)

    return (
        <div className="contact-preview grid" onClick={() => onSelectContact(contact)}>
            <Avatar fullName={full_name} />
            <div className="flex space-between align-center">
                <div className="bold">{full_name}</div>
                <div className="ellipsis">{lastMsgTime}</div>
            </div>
            <div className="contact-preview-msg ellipsis">{msgs[msgs.length - 1].text}</div>
        </div>
    )
}

export default ContactPreview
