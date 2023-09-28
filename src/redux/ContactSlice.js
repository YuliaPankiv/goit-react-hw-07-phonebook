const { createSlice } = require('@reduxjs/toolkit');
// const preloadedState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    getContactRequest(state) {
      state.isLoading = true;
    },
    getContactSuccess(state, { payload }) {
      state.isLoading = false;
      state.contacts = payload;
    },
    getContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload.massage;
    },
    addContactRequest(state, { payload }) {
      return {
        ...state,
        isLoading: true,
      };
    },
    addContactSuccess(state, { payload }) {
      return {
        ...state,
        contacts: [...state.contacts, payload],
        isLoading: false,
      };
    },
    addContactError(state, { payload }) {
      return {
        ...state,
        error: payload.massage,
        isLoading: false,
      };
    },

    filterContact(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
    removeContactRequest(state) {
      state.isLoading = true;
    },
    removeContactSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
    removeContactError(state, { payload }) {
      state.isLoading = true;
      state.error = payload.message;
    },
  },
});
export const {
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
  getContactRequest,
  getContactSuccess,
  addContactSuccess,
  addContactRequest,
  addContactError,
  removeContact,
  filterContact,
} = contactSlice.actions;
export default contactSlice.reducer;
