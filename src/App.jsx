import { useEffect, useState } from 'react'
import ContactList from './components/ContactList'
import ConversationDetails from './components/ConversationDetails'
import Searchbar from './components/Searchbar'
import initContacts from './data/contacts.json'
import conversations from './data/conversations.json'
import ConversationHeader from './components/ConversationHeader'



function App() {
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    const contactsData = contactsWithMsgs()
    setContacts(contactsData)
    setSelectedContact(contactsData[0])
  }, [])

  function onSelectContact(contact) {
    // check if prevContact has diff phone
    if (selectedContact.phone === contact.phone) return
    setSelectedContact(contact)
  }

  function contactsWithMsgs() {
    return initContacts.reduce((acc, contact) => {
      // find the conversation via contact.phone
      let conversation = conversations.find(conversation => conversation.phone === contact.phone)
      return [...acc, {
        ...contact,
        full_name: contact.first_name + ' ' + contact.last_name,
        msgs: conversation.messages || []
      }]
    }, [])
  }

  return (
    <div className="main-layout">
      <Searchbar />
      {contacts.length && <ContactList onSelectContact={onSelectContact} contacts={contacts} />}


      {selectedContact && <ConversationHeader fullName={selectedContact.full_name} />}
      {selectedContact && <ConversationDetails contact={selectedContact} />}

      {/* <h1>Welcome to the App</h1>
      <ContactList contacts={contacts} /> */}
    </div>
  )
}

export default App
