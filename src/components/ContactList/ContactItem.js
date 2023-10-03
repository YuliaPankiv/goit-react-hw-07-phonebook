import { useDispatch } from 'react-redux';
import { Delete } from './ContactList.styled';
import { deleteContact } from 'redux/operation';

export const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <Delete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Delete>
    </>
  );
};
