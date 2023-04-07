/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcats = createAsyncThunk("cats/getCats", async (param) => {
  try {
    console.log(param);
    const response = await axios("https://api.thecatapi.com/v1/breeds");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    localData: "",
    isLoading: false,
  },
  reducers: {
    tryReducers: (state, action) => {
      state.localData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getcats.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getcats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cats = action.payload;
      })
      .addCase(getcats.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { tryReducers } = catSlice.actions;

export default catSlice.reducer;
