import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchShowProfile = createAsyncThunk(
  "profile/fetchShowProfile",
  async (token) => {
    const response = await fetch(`${BASE_URI}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }
    return { user: data };
  }
);

export const fetchUpdateProfile = createAsyncThunk(
  "profile/fetchUpdateProfile",
  async ({ form, tokenLogin }) => {
    const response = await fetch(`${BASE_URI}/profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${tokenLogin}`,
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      // body: formData,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return { user: data };
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    error: null,
    status: "idle",
    userdata: {},
  },
  reducers: {},
  extraReducers: {
    [fetchShowProfile.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchShowProfile.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userdata = action.payload.user;
    },
    [fetchShowProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
    [fetchUpdateProfile.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userdata = action.payload.user;
      state.error = null;
    },
    [fetchUpdateProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = action.error;
    },
  },
});

export default profileSlice.reducer;
