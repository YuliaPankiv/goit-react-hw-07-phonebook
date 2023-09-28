import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Label } from './ContactForm.styled';
import { addContactSuccess } from 'redux/ContactSlice';
import { addContactApi } from 'servises/firebaseApi';
import { addContact } from 'redux/contactOperations';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsList.contacts);
  const isLoading = useSelector(state => state.contactsList.isLoading);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newCon = { ...form, id: nanoid() };
    const isAwailable = contacts.find(contact => contact.name === form.name);
    if (isAwailable) {
      return alert(`${form.name} is already in contacts list`);
    }
    dispatch(addContact(newCon));
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
      <Button type="submit">{isLoading ? 'Loading...' : 'Add contact'}</Button>
    </Form>
  );
};
