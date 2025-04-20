import React from "react";
import { Contacts } from "../../types";
import Contact from "../contact/Contact";
import css from './ContactList.module.css';

const ContactList: React.FC<Contacts> = (contactsList) => {
  const { contacts } = contactsList;

  return (
    <ul className={css.contacts}>
      {contacts.map(contactItem => {
        return <Contact {...contactItem} key={contactItem.id}></Contact>
      })}
    </ul>
  );
}

export default ContactList;