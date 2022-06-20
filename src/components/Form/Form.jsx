import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Form.module.css";
import { addContact } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
    dispatch(addContact(name, number));
    reset();
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
