import React from 'react'
import Avatar from './Avatar'
import { formatIsoDateToLocaleDate } from '../services/util.service'

function ContactPreview({ contact, onSelectContact, selectedContact }) {
    const { msgs, full_name: fullName } = contact
    const lastMsgTime = formatIsoDateToLocaleDate(msgs[msgs.length - 1].timestamp)
    const isHighlighted = contact.phone === selectedContact.phone
    const className = isHighlighted ? 'contact-preview grid highlighted' : 'contact-preview grid'


    return (
        <div className={className} onClick={() => onSelectContact(contact)}>
            <Avatar fullName={fullName} />
            <div className="flex space-between align-center">
                <div className="bold">{fullName}</div>
                <div className="ellipsis">{lastMsgTime}</div>
            </div>
            <div className="contact-preview-msg ellipsis">{msgs[msgs.length - 1].text}</div>
        </div>
    )
}

export default ContactPreview
