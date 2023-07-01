// missionSclice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  reservedMissionIds: [], // New state to keep track of reserved mission IDs
  isLoading: true,
};

const missionsEndpoint = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
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
      const missionId = action.payload;
      state.reservedMissionIds.push(missionId);
    },
    cancelReserve: (state, action) => {
      const missionId = action.payload;
      return {
        ...state,
        reservedMissionIds: state.reservedMissionIds.filter((id) => id !== missionId),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const newMissions = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          reserved: state.reservedMissionIds.includes(mission.mission_id),
        }));
        return {
          ...state,
          isLoading: false,
          missions: newMissions,
        };
      })
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { reserveMission, cancelReserve } = missionsSlice.actions;
export default missionsSlice.reducer;
