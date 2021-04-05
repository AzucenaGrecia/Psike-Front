import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URI } from "../../app/config";

export const fetchCreateAppointment = createAsyncThunk(
  "createAppointment/fetchCreateAppointment",
  async ({ appointment,token }) => {
    const response = await fetch(`${BASE_URI}appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(appointment)
    });

    const data = await response.json();
    if(!response.ok) {
      throw new Error(data);
    }

    return { data };
  }
);

const createAppointmentSlice = createSlice({
  name: "createAppointment",
  initialState: {
    item: {},
    status: "idle",
    error: null,
    reason:""
  },
  reducers: {
    resetPayment:(state)=>{
      state.status = "idle"
    }
  },
  extraReducers: {
    [fetchCreateAppointment.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCreateAppointment.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.item = action.payload.data;
      state.error = null;
     

    },
    [fetchCreateAppointment.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { resetPayment } = createAppointmentSlice.actions;
export default createAppointmentSlice.reducer;
