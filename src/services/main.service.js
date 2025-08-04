import contactsData from '../data/contacts.json'
import conversationsData from '../data/conversations.json'

const gContacts = _getContactsWithMsgs()

export function getContacts(searchStr = '') {
    if (searchStr) {
        const lowered = searchStr.toLowerCase() // Case insensitive search
        const filteredContacts = gContacts.filter(contact =>
            contact.first_name?.toLowerCase().includes(lowered) ||
            contact.phone?.toString().includes(searchStr) ||
            contact.last_name?.toLowerCase().includes(lowered)
        )
        return filteredContacts
    }
    return gContacts
}

function _getContactsWithMsgs() {
    return contactsData.map((contact) => {
        const conversation = conversationsData.find(conversation => conversation.phone === contact.phone)
        return {
            ...contact,
            fullName: contact.first_name + ' ' + contact.last_name,
            msgs: conversation.messages || []
        }
    })
}