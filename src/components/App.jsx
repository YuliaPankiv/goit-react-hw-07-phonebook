import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// localStorage.setItem('contacts', ['number']);
export const App = () => {
  // const preloadedState = {
  //   contacts: JSON.parse(localStorage.getItem('contacts')) || [],
  // };
  // console.log(preloadedState);

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
