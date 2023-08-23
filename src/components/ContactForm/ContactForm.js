import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Label } from './ContactForm.styled';
import { add } from 'redux/ContactSlice';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const cont = useSelector(state => state.contactsList.contacts);
  console.log(cont);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  console.log(form.name);
  const handleSubmit = e => {
    e.preventDefault();
    cont.find(contact => contact.name === form.name)
      ? alert(`${form.name} is already in contacts list`)
      : dispatch(add({ ...form, id: nanoid() }));

    setForm({ name: '', number: '' });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => {
            handleChange(e);
          }}
        />
      </Label>
      <Label>
        Tel
        <input
          type="tel"
          name="number"
          value={form.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => {
            handleChange(e);
          }}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
