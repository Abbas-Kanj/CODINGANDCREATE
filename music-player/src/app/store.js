import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { trackSlice } from "../features/track/trackSlice";

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    track: trackSlice.reducer,
  },
});
