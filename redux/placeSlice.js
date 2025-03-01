import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "places",
  initialState: {
    searches: [],
  },
  reducers: {
    addSearch: (state, action) => {
      state.searches.push(action.payload);
    },
    saveFavorite: (state, action) => {
      console.log("Saving favorite:", action.payload);
    },
    clearHistory: (state) => {
      state.searches = []; 
    },
  },
});

export const { addSearch, saveFavorite, clearHistory } = placeSlice.actions;
export default placeSlice.reducer;
