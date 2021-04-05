import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchShowPsychologist = createAsyncThunk(
  "showPsychologist/fetchShowPsychologist",
  async ({ id }) => {
    const response = await fetch(`${BASE_URI}/psychologists/${id}`);
    const data = await response.json();
    if(!response.ok) {
      throw new Error(data)
    }

    return { data };
  }
);

const showPsychologistSlice = createSlice({
  name: "showPsychologist",
  initialState: {
    single: {},
    schedules: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateStatus(state) {
      state.status = 'idle';
    }
  },
  extraReducers: {
    [fetchShowPsychologist.pending]: (state) => {
      state.status = "loading";
    },
    [fetchShowPsychologist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.single = action.payload.data;
      state.schedules = action.payload.data.schedules;
      state.error = null;
    },
    [fetchShowPsychologist.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { updateStatus } = showPsychologistSlice.actions;
export default showPsychologistSlice.reducer;
