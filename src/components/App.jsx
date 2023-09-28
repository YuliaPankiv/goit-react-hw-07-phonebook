import { useEffect } from 'react';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isContactExist = useSelector(state =>
    Boolean(state.contactsList.contacts.length)
  );

  useEffect(() => {
    !isContactExist && dispatch(getContacts());
  }, [dispatch, isContactExist]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
