import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
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
  }
);

export const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state) => ({
      ...state,
    }),
    cancelReserve: (state) => ({
      ...state,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const newRockets = [];
        action.payload.map((rocket) =>
          newRockets.push({
            id: rocket.id,
            name: rocket.rocket_name,
            description: rocket.description,
            image: rocket.flickr_images[0],
          })
        );
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

export const { reserveRocket, cancelReserve } = RocketsSlice.actions;
export default RocketsSlice.reducer;
