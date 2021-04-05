import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchShowAppointments = createAsyncThunk(
  "showAppointments/fetchShowAppointments",
  async ({ id }) => {
    const response = await fetch(`${BASE_URI}/psychologists/${id}/appointments`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
    
    return { data };
  }
);

const showAppointmentsSlice = createSlice({
  name: "showAppointments",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateStatus(state) {
      state.status = 'idle';
    }
  },
  extraReducers: {
    [fetchShowAppointments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchShowAppointments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.data;
      state.error = null;
    },
    [fetchShowAppointments.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { updateStatus } = showAppointmentsSlice.actions;
export default showAppointmentsSlice.reducer;
