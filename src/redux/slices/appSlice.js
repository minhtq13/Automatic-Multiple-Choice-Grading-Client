import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapse: false
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsCollapse: (state, action) => {
      state.isCollapse = action.payload;
    },

  },
});

export const { setIsCollapse } = appReducer.actions;
export default appReducer.reducer;
