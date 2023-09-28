import axios from 'axios';

//enf
axios.defaults.baseURL =
  'https://contactbook-3c9ee-default-rtdb.firebaseio.com';

export const addContactApi = contact => {
  return axios.post('/contact.json', contact).then(({ data }) => {
    return { ...contact, id: data.name };
  });
};

export const getContactApi = () => {
  return axios
    .get('/contact.json')
    .then(({ data }) =>
      Object.entries(data).map(([id, contact]) => ({ ...contact, id }))
    );
};
export const removeContactApi = id => {
  return axios.delete(`/contact/${id}.json`).then(() => id);
};
