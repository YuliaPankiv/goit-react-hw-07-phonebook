import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactRequest,
  getContactSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from 'redux/ContactSlice';
import {
  addContactApi,
  getContactApi,
  removeContactApi,
} from 'servises/firebaseApi';

export const addContact = newContact => (dispatch, getState) => {
  dispatch(addContactRequest());
  addContactApi(newContact)
    .then(contact => dispatch(addContactSuccess(contact)))
    .catch(err => dispatch(addContactError(err.massage)));
}; 
export const getContacts = () => dispatch => {
  dispatch(getContactRequest);
  getContactApi().then(data => dispatch(getContactSuccess(data)));
};

export const removeContact = id => dispatch => {
  dispatch(removeContactRequest());

  removeContactApi(id)
    .then(data => dispatch(removeContactSuccess(data)))
    .catch(err => dispatch(removeContactError(err.message)));
  // getContactApi().then(data => dispatch(getContactSuccess(data)));
};
