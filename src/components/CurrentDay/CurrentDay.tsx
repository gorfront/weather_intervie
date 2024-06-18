import React, { useState, useEffect } from "react";
import { WeatherData } from "../Main/Main";
import { useAppSelector } from "../../utils/hooks";
import { weatherSelect } from "../../store/slices/weather/weatherSlice";

interface CurrentDayProps {
  temp: string;
  currentDay: number;
}

const CurrentDay: React.FC<CurrentDayProps> = ({ currentDay, temp }) => {
  const [forecastData, setForecastData] = useState<WeatherData[]>([]);
  const weather = useAppSelector(weatherSelect);
  const city = weather?.city?.name;

  useEffect(() => {
    if (weather?.list) {
      setForecastData(weather.list.slice(3, 11));
    }
  }, [weather]);

  const data = weather?.list?.find(
    (el: { dt: number }) => el.dt === currentDay
  );

  if (!data) {
    return null;
  }

  return (
    <div className="weather-container">
      <div className="weather-container--main">
        <h1>{city}</h1>
        <h2>{Math.round(data.main.temp)}°C</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <p>{data.weather[0].description}</p>
      </div>
      <div className="weather-container--forecast">
        {forecastData.map((forecast, index) => (
          <div key={index} className="weather-container--forecast__item">
            <p>{forecast.dt_txt.split(" ")[1]}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <p>
              {Math.round(forecast.main.temp)}°{temp === "metric" ? "C" : "F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDay;
