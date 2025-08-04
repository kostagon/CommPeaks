import React from 'react'
import ContactPreview from './ContactPreview'

function ContactList({ contacts, selectedContact, onSelectContact }) {
    if (!contacts.length) return <div className="contact-list-container conversations-amount bold">No conversations found ¯\_(ツ)_/¯</div>
    return (
        <div className="contact-list-container">
            <div className="conversations-amount bold">{contacts.length} Conversations</div>
            {contacts.map(contact => (
                <ContactPreview key={contact.phone} contact={contact} onSelectContact={onSelectContact} selectedContact={selectedContact} />
            ))}
        </div >
    )
}

export default ContactList
