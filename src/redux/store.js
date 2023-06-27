import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  rockets: rocketsReducer,
});

export default store;
