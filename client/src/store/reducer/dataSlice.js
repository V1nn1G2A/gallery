import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {
    fetchSuccsess: (state, action) => {
      state.data = [...action.payload];
      state.loading = false;
      state.error = null;
    },
    fetchFailed: (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetchSuccsess, fetchFailed } = dataSlice.actions;
export default dataSlice.reducer;
