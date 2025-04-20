import './App.css';
import contactsList from '../contacts.json';
import ContactList from './contact-list/ContactList';

const list = {
  contacts: contactsList
}

const App = () => {
  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactList {...list} />
    </div>
  );
}

export default App;
