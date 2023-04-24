import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refreshRemoveFilm: false,
};

const refreshReducer = createSlice({
  name: "refreshReducer",
  initialState,
  reducers: {
    setRefreshRemoveFilm: (state, action) => {
      state.refreshRemoveFilm = action.payload;
    },
  },
});

export const { setRefreshRemoveFilm } = refreshReducer.actions;
export default refreshReducer.reducer;
