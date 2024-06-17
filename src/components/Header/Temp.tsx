import React, { useEffect } from "react";
import { useAppDispatch } from "../../utils/hooks";
import { fetchWeather } from "../../store/slices/weather/weatherAPI";

interface TempProps {
  city: string;
  temp: string;
  setTemp: React.Dispatch<React.SetStateAction<string>>;
}

const Temp: React.FC<TempProps> = ({ temp, setTemp, city }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ city, temp }));
  }, [city, temp]);

  return (
    <div className="header--temp">
      <input
        type="radio"
        id="tempChoiceC"
        name="temp"
        checked={temp === "metric"}
        value="metric"
        onChange={(e) => setTemp(e.target.value)}
      />
      <label htmlFor="tempChoiceC">°C</label>

      <input
        type="radio"
        id="tempChoiceF"
        name="temp"
        checked={temp === "standard"}
        value="standard"
        onChange={(e) => setTemp(e.target.value)}
      />
      <label htmlFor="tempChoiceF">°F</label>
    </div>
  );
};

export default Temp;
