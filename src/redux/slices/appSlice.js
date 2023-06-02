import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapse: false,
  selectedItem: null,
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsCollapse: (state, action) => {
      state.isCollapse = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setIsCollapse, setSelectedItem } = appReducer.actions;
export default appReducer.reducer;
