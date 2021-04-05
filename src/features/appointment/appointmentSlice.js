import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchAppointments = createAsyncThunk(
  "history/fetchAppointments",
  async (token) => {
    const response = await fetch(`${BASE_URI}/appointments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  }
);

const appointmentSlice = createSlice({
  name: "history",
  initialState: {
    error: null,
    status: "idle",
    appointments: [],
    filterAppointments: [],
  },
  reducers: {
    filterByDate: (state, action) => {
      const { date } = action.payload;
      state.filterAppointments = state.appointments.filter(
        (obj) => obj.date === date
      );
    },
    resetFilter: (state, action) => {
      state.filterAppointments = state.appointments;
    },
  },
  extraReducers: {
    [fetchAppointments.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAppointments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.appointments = action.payload;
      state.filterAppointments = state.appointments;
    },
    [fetchAppointments.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error;
    },
  },
});
export const { filterByDate, resetFilter } = appointmentSlice.actions;
export default appointmentSlice.reducer;
