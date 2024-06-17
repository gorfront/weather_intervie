import React, { useState, useEffect } from "react";
import { WeatherData } from "./Main";
import "./Main.scss";

interface CurrentTimeProps {
  weather?: WeatherData;
  temp: string;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ weather, temp }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<WeatherData[]>([]);
  const city = weather?.city?.name;

  useEffect(() => {
    if (weather?.list) {
      setWeatherData(weather.list[0]);
      setForecastData(weather.list.slice(3, 11));
    }
  }, [weather]);

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-container">
      {weatherData && (
        <>
          <div className="weather-container--main">
            <h1>{city}</h1>
            <h2>
              {Math.round(weatherData.main.temp)}°
              {temp === "metric" ? "C" : "F"}
            </h2>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <p>{weatherData.weather[0].description}</p>
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
                  {Math.round(forecast.main.temp)}°
                  {temp === "metric" ? "C" : "F"}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentTime;
