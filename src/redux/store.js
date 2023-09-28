import { configureStore } from '@reduxjs/toolkit';
import ContactSlice from './ContactSlice';
// const culoger = store => {
//   return next => {
//     return action => {
//       const prev = store.getState();
//       console.group('action', action.type);
//       console.log(prev);
//       console.groupEnd();
//       next(action);
//     };
//   };
// };

export const store = configureStore({
  reducer: {
    contactsList: ContactSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
