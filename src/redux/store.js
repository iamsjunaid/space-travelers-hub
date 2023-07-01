import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
