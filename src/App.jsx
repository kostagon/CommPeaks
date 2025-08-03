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

  function onSelectContact(contact) {
    if (selectedContact.phone === contact.phone) return
    setSelectedContact(contact)
  }

  function onSearch(searchStr) {
    const lowered = searchStr.toLowerCase()
    const contactsCopy = contactsWithMsgs()

    const filtered = contactsCopy.filter(contact =>
      contact.first_name?.toLowerCase().includes(lowered) ||
      contact.phone?.toString().includes(searchStr) ||
      contact.last_name?.toLowerCase().includes(lowered)
    )

    setContacts(filtered)
  }


  function onAddMsg(txt) {
    // In order for the app to be Ephemeral, I have to update both of the states.

    let newMsg = {
      timestamp: new Date().toISOString(),
      sender: 'me',
      text: txt.trim()
    }

    setSelectedContact(prevState => ({
      ...prevState,
      msgs: [...prevState.msgs, newMsg]
    }))

    setContacts(prevContacts => (
      prevContacts.map(contact =>
        contact.phone === selectedContact.phone
          ? { ...contact, msgs: [...contact.msgs, newMsg] }
          : contact
      )))

  }

  return (
    <div className="main-layout">
      <Searchbar onSearch={onSearch} />
      <ContactList onSelectContact={onSelectContact} contacts={contacts} selectedContact={selectedContact} />
      {selectedContact && <ConversationHeader fullName={selectedContact.full_name} />}
      {selectedContact && <ConversationDetails contact={selectedContact} onAddMsg={onAddMsg} />}
    </div>
  )
}

export default App
