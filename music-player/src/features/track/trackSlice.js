import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  initialState: {
    src: null,
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.src = action.payload;
    },
  },
});

export const { setCurrentTrack } = trackSlice.actions;

export default trackSlice.reducer;
