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
    reserveMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
    cancelReserve: (state, action) => {
      const newMissions = state.missions.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchmissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchmissions.fulfilled, (state, action) => {
        const newmissions = [];
        action.payload.map((mission) => newmissions.push({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
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

export const { reserveMission, cancelReserve } = missionsSlice.actions;
export default missionsSlice.reducer;
