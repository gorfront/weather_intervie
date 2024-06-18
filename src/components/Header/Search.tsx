import React, { useCallback } from "react";
import { fetchWeather } from "../../store/slices/weather/weatherAPI";
import { useAppDispatch } from "../../utils/hooks";

interface SearchProps {
  temp: string;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ temp, city, setCity }) => {
  const dispatch = useAppDispatch();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const enteredCity = formData.get("city") as string;
      if (enteredCity) {
        dispatch(fetchWeather({ city: enteredCity, temp }));
      }
    },
    [dispatch, temp]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
    },
    [setCity]
  );

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
      />
      <button type="submit">Search City</button>
    </form>
  );
};

export default Search;
