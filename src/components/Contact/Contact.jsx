import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/contacts/actions";
import { AiOutlineDelete } from "react-icons/ai";
import s from "./Contact.module.css";

const Contacts = () => {
  const filter = useSelector((state) => state.contacts.filter).toLowerCase();
  const items = useSelector((state) => state.contacts.items);
  const contacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button
              key={contact.id}
              name={contact.name}
              className={s.btn}
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              <AiOutlineDelete className={s.ImSearch} />
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Contacts;
