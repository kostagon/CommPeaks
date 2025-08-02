import React from 'react'
import ContactPreview from './ContactPreview'

function ContactList({ contacts }) {
    return (
        <div className="contact-list-container">
            <div style={{ fontWeight: 'bold', padding: '1em' }}>{contacts.length} Conversations</div>
            {contacts.map(contact => (
                <ContactPreview key={contact.phone} contact={contact} />
            ))}
        </div>
    )
}

export default ContactList
