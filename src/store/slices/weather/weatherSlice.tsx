import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI";

const initialState = {};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchWeather.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const {} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;

export const weatherSelect = (state: any) => state.weather;
