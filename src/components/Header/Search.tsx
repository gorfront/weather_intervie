import { fetchWeather } from "../../store/slices/weather/weatherAPI";
import { useAppDispatch } from "../../utils/hooks";

interface SearchProps {
  temp: string;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ temp, city, setCity }) => {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enteredCity = formData.get("city") as string;
    if (enteredCity) {
      dispatch(fetchWeather({ city: enteredCity, temp }));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search City</button>
    </form>
  );
};

export default Search;
