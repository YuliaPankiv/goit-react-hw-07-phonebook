import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from 'servises/firebaseApi';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await addContactApi(contact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  // {
  //   condition: (contact, { getState }) => {
  //     const { items } = getState().contacts.contacts;
  //   },
  // }
);
export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await removeContactApi(id);
      return data.id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
