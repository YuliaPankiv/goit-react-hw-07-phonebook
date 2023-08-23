import { createSlice } from '@reduxjs/toolkit';

const preloadedState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = createSlice({
  name: 'contacts',
  initialState: { contacts: preloadedState, filterValue: '' },
  reducers: {
    createContact(state, { payload }) {
      return { ...state, contacts: [...state.contacts, payload] };
    },
    filterContact(state, { payload }) {
      return {
        ...state,
        filterValue: payload,
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

export const { createContact, filterContact, removeContact } =
  contactReducer.actions;
export default createContact.reducers;
