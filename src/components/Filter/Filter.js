import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/ContactSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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
            dispatch(filterContacts(e.target.value));
          }}
        />
      </Label>
    </>
  );
};
