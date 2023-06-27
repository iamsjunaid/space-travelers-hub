import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  rockets: rocketReducer,
});

export default store;
