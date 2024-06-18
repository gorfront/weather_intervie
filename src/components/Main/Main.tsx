import { weatherSelect } from "../../store/slices/weather/weatherSlice";
import { useAppSelector } from "../../utils/hooks";
import CurrentTime from "./CurrentTime";

export interface WeatherData {
  dt: number;
  list: any;
  city: Record<string, string>;
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

type MainProps = { temp: string };

const Main: React.FC<MainProps> = ({ temp }) => {
  const weather = useAppSelector<WeatherData>(weatherSelect);

  return (
    <div>
      <CurrentTime weather={weather} temp={temp} />
    </div>
  );
};

export default Main;
