import React from 'react'
import ContactPreview from './ContactPreview'

export const ContactList = ({ contacts }) => {
    return (
        <div>
            <div style={{ fontWeight: 'bold', padding: '1em' }}>{contacts.length} Conversations</div>
            {contacts.map(contact => (
                <ContactPreview key={contact.phone} contact={contact} />
            ))}
        </div>
    )
}
