import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchUpdateAppointment = createAsyncThunk(
  "updateAppointment/fetchUpdateAppointment",
  async ({ token, id, url }) => {
    const response = await fetch(`${BASE_URI}appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }

    return { data };
  }
);

const updateAppointmentSlice = createSlice({
  name: "updateAppointment",
  initialState: {
    item: {},
    status: "idle",
    error: null,
  },
  reducers: {
    resetPaymentUpdating(state) {
      state.status = 'idle';
    }
  },
  extraReducers: {
    [fetchUpdateAppointment.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUpdateAppointment.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.item = action.payload.data;
      console.log(state.item);
      state.error = null;
    },
    [fetchUpdateAppointment.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export const { resetPaymentUpdating } = updateAppointmentSlice.actions;

export default updateAppointmentSlice.reducer;