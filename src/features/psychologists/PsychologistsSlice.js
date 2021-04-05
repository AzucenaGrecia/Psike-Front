import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchPsychologists",
  async () => {
    const response = await fetch(`${BASE_URI}psychologists`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { psychologists: data };
  }
);

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    status: "idle",
    error: null,
    items: [],
    filterItems: [],
    categories: [],
    filterCategories: [],
    filterRanking: null,
    filterPrice: null,
  },
  reducers: {
    setFilters: (state, action) => {
      let { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: {
    [fetchPsychologists.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchPsychologists.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.items = action.payload.psychologists;
      let r = [];
      state.items.forEach((element) => {
        element.specialties.forEach((spe) => {
          r.push(spe);
        });
      });
      state.categories = r
        .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i)
        .map((item) => {
          return { value: item.name, label: item.name };
        });
      state.filterItems = state.items;
    },

    [fetchPsychologists.error]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { setFilters } = psychologistsSlice.actions;
export default psychologistsSlice.reducer;
