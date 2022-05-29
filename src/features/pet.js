import { createSlice } from "@reduxjs/toolkit";

export const petSlice = createSlice({
  name: "pet",
  initialState: {
    value: {
      id: "",
      name: "",
      species: "",
      available: "",
      birthYear: "",
      dateAdded: "",
      photo: "",
    },
  },
  reducers: {
    loadData: (state, action) => {},
  },
});

export const { loadData } = petSlice.actions;

export default petSlice.reducer;
