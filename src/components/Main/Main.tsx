import { weatherSelect } from "../../store/slices/weather/weatherSlice";
import { useAppSelector } from "../../utils/hooks";
import CurrentTime from "./CurrentTime";
import MoreDaysTemp from "./MoreDaysTemp";

export interface WeatherData {
  list: any;
  city: any;
  name: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  dt_txt: string;
  setCurrentDay: React.Dispatch<React.SetStateAction<number>>;
  temp: string;
}

const Main: React.FC<WeatherData> = ({ setCurrentDay, temp }) => {
  const weather = useAppSelector<WeatherData>(weatherSelect);

  return (
    <div>
      <CurrentTime weather={weather} temp={temp} />
      <MoreDaysTemp setCurrentDay={setCurrentDay} temp={temp} />
    </div>
  );
};

export default Main;
