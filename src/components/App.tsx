import './App.css';
import contactsList from '../contacts.json';
import ContactList from './contact-list/ContactList';
import SearchBox from './search-box/SearchBox';
import { useState } from 'react';

const list = {
  contacts: contactsList
}

const App = () => {
  const [ searchValue, setSearchValue ] = useState('');

  list.contacts = contactsList.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  const handleSearch = (value: string) => {
    setSearchValue(value);
  }

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <SearchBox value={searchValue} onSearch={handleSearch}/>
      <ContactList {...list} />
    </div>
  );
}

export default App;
