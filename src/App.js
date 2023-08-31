import React, { useState } from 'react';

function ContactApp() {
  const [contacts, setContacts] = useState([]);
  const [contactName, setContactName] = useState('');
  const [contactId, setContactId] = useState('');

  const handleNameChange = (event) => {
    setContactName(event.target.value);
  };

  const handleIdChange = (event) => {
    setContactId(event.target.value);
  };

  const handleSaveClick = () => {
    if (contactName && contactId) {
      const newContact = {
        id: contactId,
        name: contactName,
      };

      setContacts([...contacts, newContact]);
      setContactName('');
      setContactId('');
    }
  };

  return (
    <div>
      <h2>Contact Management</h2>
      <div>
        <label>
          Contact Name:
          <input type="text" value={contactName} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Contact ID:
          <input type="text" value={contactId} onChange={handleIdChange} />
        </label>
      </div>
      <button onClick={handleSaveClick}>Save</button>
      <h3>Contact List</h3>
      <table>
        <thead>
          <tr>
            <th>Contact ID</th>
            <th>Contact Name</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactApp;
