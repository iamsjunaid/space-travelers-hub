import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  isLoading: true,
};

const urlBase = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await fetch(urlBase);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch dragons');
  }
});

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state) => ({
      ...state,
    }),
    cancelReserve: (state) => ({
      ...state,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const newDragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          type: dragon.type,
          image: dragon.flickr_images[0],
        }));
        return {
          ...state,
          isLoading: false,
          dragons: newDragons,
        };
      })
      .addCase(fetchDragons.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { reserveDragon, cancelReserve } = dragonsSlice.actions;
export default dragonsSlice.reducer;
