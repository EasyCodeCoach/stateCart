import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    toggle: false,
  },
  reducers: {
    showToggle: (state) => {
      state.toggle = !state.toggle;
      console.log(state.toggle);
    },
  },
});

// Action creators are generated for each case reducer function
export const { showToggle } = modalSlice.actions;

export default modalSlice.reducer;
