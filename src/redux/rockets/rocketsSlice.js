import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  reservedRocketIds: [], // New state to keep track of reserved rocket IDs
  isLoading: true,
};

const rocketsEndpoint = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const response = await fetch(rocketsEndpoint);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      state.reservedRocketIds.push(rocketId);
    },
    cancelReserve: (state, action) => {
      const rocketId = action.payload;
      return {
        ...state,
        reservedRocketIds: state.reservedRocketIds.filter((id) => id !== rocketId),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const newRockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
          reserved: state.reservedRocketIds.includes(rocket.id),
        }));
        return {
          ...state,
          isLoading: false,
          rockets: newRockets,
        };
      })
      .addCase(fetchRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
