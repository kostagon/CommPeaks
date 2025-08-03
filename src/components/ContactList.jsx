import React from 'react'
import ContactPreview from './ContactPreview'

function ContactList({ contacts, onSelectContact, selectedContact }) {
    if (!contacts.length) return <div className="contact-list-container flex justify-center bold">No contacts ¯\_(ツ)_/¯</div>
    return (
        <div className="contact-list-container">
            <div className="conversations-amount bold">{contacts.length} Conversations</div>
            {
                contacts.map(contact => (
                    <ContactPreview key={contact.phone} contact={contact} onSelectContact={onSelectContact} selectedContact={selectedContact} />
                ))
            }
        </div >
    )
}

export default ContactList
