import './App.css';
import contactsList from '../contacts.json';
import ContactList from './contact-list/ContactList';
import SearchBox from './search-box/SearchBox';
import ContactForm from './contact-form/ContactForm';
import { useState } from 'react';
import { ContactItem } from '../types';

const list = {
  contacts: contactsList
}

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState(contactsList);

  list.contacts = items.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  const handleSearch = (value: string) => {
    setSearchValue(value);
  }

  const handleAdd = (item: ContactItem) => {
    setItems((currentItems) => [...currentItems, item]);
  }

  const handleDelete = (id: string) => {
    setItems((currentItems) => currentItems.filter(item => item.id !== id));
  }

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAdd}/>
      <SearchBox value={searchValue} onSearch={handleSearch}/>
      <ContactList contactsList={list.contacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
