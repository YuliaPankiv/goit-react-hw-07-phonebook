import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/ContactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactsList.filter);
  return (
    <>
      <Label>
        Find ny name
        <input
          type="text"
          name="filter"
          value={filter}
          required
          onChange={e => {
            dispatch(filterContact(e.target.value));
          }}
        />
      </Label>
    </>
  );
};
