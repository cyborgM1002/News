import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  country: "in",
  category: "",
  pageNum: 1,
  loading: false,
};

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setLoading: (state, action) => {
      state.pageNum = action.payload;
    },
  },
});

export const { setCountry, setCategory, setPageNum, setLoading } =
  newsSlice.actions;
export default newsSlice.reducer;
