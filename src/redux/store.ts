import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slice";

const newsStore = configureStore({
  reducer: newsSlice,
});

export default newsStore;
