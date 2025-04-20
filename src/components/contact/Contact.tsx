import { ContactItem } from "../../types";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from './Contact.module.css';

type Props = {
  item: ContactItem;
  onDelete: (id: string) => void;
}

const Contact: React.FC<Props> = (props) => {
  const { item, onDelete } = props;
  const { id, name, number } = item;

  return (
    <li id={id} className={css.contact}>
      <div>
        <p className={css.contactText}><IoPersonSharp />{name}</p>
        <p className={css.contactText}><FaPhone />{number}</p>
      </div>
      <button className={css.contactButton} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default Contact;