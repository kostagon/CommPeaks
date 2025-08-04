import { useEffect, useState } from 'react'

import { getContacts } from './services/main.service'

import ContactList from './components/ContactList'
import ConversationDetails from './components/ConversationDetails'
import Searchbar from './components/Searchbar'
import ConversationHeader from './components/ConversationHeader'

function App() {
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    const contactsData = getContacts()
    setContacts(contactsData)
    setSelectedContact(contactsData[0])
  }, [])

  function onSelectContact(contact) {
    if (selectedContact.phone === contact.phone) return
    setSelectedContact(contact)
  }

  function onSearch(searchStr) {
    let filteredContacts = getContacts(searchStr)
    setContacts(filteredContacts)
  }

  function onAddMsg(txt) {
    let newMsg = {
      timestamp: new Date().toISOString(),
      sender: 'me',
      text: txt.trim()
    }

    // In order for the app to be Ephemeral, we update both of the states.
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
      {selectedContact && <ConversationHeader fullName={selectedContact.fullName} />}
      {selectedContact && <ConversationDetails contact={selectedContact} onAddMsg={onAddMsg} />}
    </div>
  )
}

export default App
