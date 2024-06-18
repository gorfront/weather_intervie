import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import { weatherSelect } from "../../store/slices/weather/weatherSlice";
import { WeatherData } from "../Main/Main"; // Assuming WeatherData interface is imported

interface MoreDaysProps {
  setCurrentDay: React.Dispatch<React.SetStateAction<number>>;
  temp: string;
}

const MoreDaysTemp: React.FC<MoreDaysProps> = ({ setCurrentDay, temp }) => {
  const weather = useAppSelector(weatherSelect);
  const navigate = useNavigate();

  const moreDays = weather?.list?.filter((_day: string, idx: number) => {
    return (
      weather.list[idx]?.dt_txt?.slice(0, 10) !==
      weather.list[idx + 1]?.dt_txt?.slice(0, 10)
    );
  });

  const handleDayClick = (dt: number) => {
    setCurrentDay(dt);
    navigate("/current");
  };

  return (
    <div className="weather-container__moreDays">
      {moreDays?.map((day: WeatherData) => (
        <div
          key={day.dt}
          className="weather-container__moreDays--item"
          onClick={() => handleDayClick(day.dt)}
        >
          <h3>{day.dt_txt.slice(5, 10)}</h3>
          <div>
            <p>
              {Math.round(Number(day.main.temp))}°
              {temp === "metric" ? "C" : "F"}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreDaysTemp;
