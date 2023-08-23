import { configureStore } from '@reduxjs/toolkit';
import ContactSlice from './ContactSlice';

export const store = configureStore({
  reducer: {
    contactsList: ContactSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

