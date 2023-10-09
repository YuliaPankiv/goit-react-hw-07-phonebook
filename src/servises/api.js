import axios from 'axios';

//enf
const contactsAPI = axios.create({
  baseURL: 'https://651beec1194f77f2a5af1a88.mockapi.io/contacts',
});

export const getContactsApi = async () =>
  (await contactsAPI.get('/contacts')).data;
export const removeContactApi = async id =>
  (await contactsAPI.delete(`/contacts/${id}`)).data;
export const addContactApi = async contact =>
  (await contactsAPI.post('/contacts', contact)).data;
