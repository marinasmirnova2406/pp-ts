import { createSlice } from "@reduxjs/toolkit";

interface UserTripsState {
    newTripsAvailable: number;
  }

const initialState: UserTripsState = {
    newTripsAvailable: 5,
};

const userTripsSlice = createSlice({
  name: "userTrips",
  initialState,
  reducers: {
  },
});

export const { } = userTripsSlice.actions;
export default userTripsSlice.reducer;
