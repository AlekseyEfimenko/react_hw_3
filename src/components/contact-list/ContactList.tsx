import React from "react";
import { ContactItem } from "../../types";
import Contact from "../contact/Contact";
import css from './ContactList.module.css';

type Props = {
  contactsList: ContactItem[];
  onDelete: (id: string) => void;
}

const ContactList: React.FC<Props> = (props) => {
  const { contactsList, onDelete } = props;

  return (
    <ul className={css.contacts}>
      {contactsList.map(contactItem => {
        return <Contact item={contactItem} onDelete={onDelete} key={contactItem.id}></Contact>
      })}
    </ul>
  );
}

export default ContactList;