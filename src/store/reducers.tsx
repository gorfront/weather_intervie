import { combineReducers } from "@reduxjs/toolkit";
import { weatherReducer } from "./slices/weather/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
