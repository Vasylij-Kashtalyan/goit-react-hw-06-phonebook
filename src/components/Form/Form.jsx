import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.css";
import { addContact } from "../../redux/contacts/actions";
import Notiflix from "notiflix";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.contacts.items);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      items
        .map((contact) => contact.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    }

    dispatch(addContact(name, number));
    reset();

    return Notiflix.Notify.success(`${name} is adde in contacts`);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.form__label}>
          Name
          <input
            onChange={handleChange}
            className={s.form__input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.form__label}>
          Number
          <input
            onChange={handleChange}
            className={s.form__input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.form__button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};
export default Form;
