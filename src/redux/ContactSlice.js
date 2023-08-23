const { createSlice } = require('@reduxjs/toolkit');
const preloadedState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: preloadedState,
    filter: '',
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    },
    filterContact(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
    removeContact(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => payload !== id),
      };
    },
  },
});
export const { add, removeContact, filterContact } = contactSlice.actions;
export default contactSlice.reducer;
