import { Item, List } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsList.contacts);

  const filter = useSelector(state => state.contactsList.filter);
  const visualContacts = contacts.filter(({ name }) => {
    const contactName = name.toLowerCase();
    if (!filter) {
      return contacts;
    }
    return contactName.includes(filter);
  });

  console.log(visualContacts);
  return (
    <List>
      {visualContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem {...contact} />
        </Item>
      ))}
    </List>
  );
};
