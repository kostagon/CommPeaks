import React from 'react'
import Avatar from './Avatar'
import { formatIsoDateToLocaleDate } from '../services/util.service'

function ContactPreview({ contact }) {
    const { msgs, full_name } = contact
    const lastMsg = formatIsoDateToLocaleDate(msgs[msgs.length - 1].timestamp)

    return (
        <div className="contact-preview grid">
            <Avatar fullName={full_name} />
            <div className="flex space-between align-center">
                <div className="bold">{full_name}</div>
                <div>{lastMsg}</div>
            </div>
            <div className="contact-preview-msg">{msgs[msgs.length - 1].text}</div>
        </div>
    )
}

export default ContactPreview
