import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reduce: {
    user: userReducer,
  },
});

export default store;
