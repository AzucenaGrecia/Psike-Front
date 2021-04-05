import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async (token) => {
    const response = await fetch(`${BASE_URI}/appointments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
  
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { quotes: data };
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    cleanQuotes: (state) => {
      state.items = [];
      state.status = "idle";
    },
  },
  extraReducers: {
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.quotes;
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

/*export const { filterByCategory, filterByName ,backFilterProduct} = productsSlice.actions;*/
export default quotesSlice.reducer;
export const { cleanQuotes } = quotesSlice.actions;
