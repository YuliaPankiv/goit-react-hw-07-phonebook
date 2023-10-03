import { Item, List } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/operation';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  console.log('do list');
  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem {...contact} />
        </Item>
      ))}
    </List>
  );
};
