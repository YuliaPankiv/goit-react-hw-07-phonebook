import { useDispatch } from 'react-redux';
import { Delete } from './ContactList.styled';
import { removeContact } from 'redux/contactOperations';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Delete type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </Delete>
    </>
  );
};
