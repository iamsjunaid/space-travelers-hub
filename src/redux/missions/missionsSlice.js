import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: true,
};

const missionsEndpoint = 'https://api.spacexdata.com/v3/missions';

export const fetchmissions = createAsyncThunk(
  'missions/fetchmissions',
  async () => {
    try {
      const response = await fetch(missionsEndpoint);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
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
      .addCase(fetchmissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchmissions.fulfilled, (state, action) => {
        const newmissions = [];
        action.payload.map((rocket) => newmissions.push({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        }));
        return {
          ...state,
          isLoading: false,
          missions: newmissions,
        };
      })
      .addCase(fetchmissions.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { reserveRocket, cancelReserve } = missionsSlice.actions;
export default missionsSlice.reducer;
