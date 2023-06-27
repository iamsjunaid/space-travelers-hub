import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
