import { ContactItem } from "../../types";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from './Contact.module.css';

const Contact: React.FC<ContactItem> = (item) => {
  const { id, name, number } = item;

  return (
    <li id={id} className={css.contact}>
      <div>
        <p className={css.contactText}><IoPersonSharp />{name}</p>
        <p className={css.contactText}><FaPhone />{number}</p>
      </div>
      <button className={css.contactButton}>Delete</button>
    </li>
  );
}

export default Contact;