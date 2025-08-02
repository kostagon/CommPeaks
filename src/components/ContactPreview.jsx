import React from 'react'
import { Avatar } from './Avatar'
import { getInitials } from '../services/util.service'
import { formatIsoDateToLocaleDate } from '../services/util.service'

export default function ContactPreview({ contact }) {
    const { msgs, full_name } = contact
    const lastMsgAt = formatIsoDateToLocaleDate(msgs[msgs.length - 1].timestamp)
    const initials = getInitials(full_name)
    console.log({ lastMsgAt })

    return (
        <div className="contact-preview grid">
            <Avatar initials={initials} />
            <div className="flex space-between align-center">
                <div className="bold">{full_name}</div>
                <div>{lastMsgAt}</div>
            </div>
            <div className="contact-preview-msg">{msgs[msgs.length - 1].text}</div>
        </div>
    )
}
