import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import { weatherSelect } from "../../store/slices/weather/weatherSlice";

interface MoreDaysProps {
  setCurrentDay: React.Dispatch<React.SetStateAction<number>>;
  temp: string;
}

const MoreDaysTemp: React.FC<MoreDaysProps> = ({ setCurrentDay, temp }) => {
  const weather = useAppSelector(weatherSelect);
  const moreDays = weather?.list?.filter(
    (_el: any, idx: number) =>
      weather?.list[idx]?.dt_txt?.slice(0, 10) !==
      weather?.list[idx + 1]?.dt_txt?.slice(0, 10)
  );
  const navigate = useNavigate();

  return (
    <div className="weather-container__moreDays">
      {moreDays?.map(
        (el: {
          dt: number;
          dt_txt: string;
          main: {
            temp: string;
          };
          weather: { icon: string }[];
        }) => (
          <div
            onClick={() => {
              navigate("/current");
              setCurrentDay(el.dt);
            }}
            key={el.dt}
            className="weather-container__moreDays--item"
          >
            <h3>{el.dt_txt.slice(5, 10)}</h3>
            <div>
              <p>
                {Math.round(Number(el.main.temp))} °
                {temp === "metric" ? "C" : "F"}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MoreDaysTemp;
