import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async function ({ city, temp }: Record<string, string>) {
    const KEY = "4f854dff31c2e1ca2516bffdbe8c42c1";
    const initialData = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        city === "" ? "Yerevan" : city
      }&appid=${KEY}&units=${temp}`
    );

    const data = initialData.data;

    return data;
  }
);
