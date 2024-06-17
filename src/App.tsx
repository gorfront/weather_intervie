import { Route, Routes } from "react-router-dom";
import HomeWrapper from "./wrapper/HomeWrapper";
import Main from "./components/Main/Main";
import CurrentDay from "./components/CurrentDay/CurrentDay";
import { useState } from "react";
import CurrentPage from "./components/CurrentDay/CurrentPage";

const App: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [temp, setTemp] = useState("metric");
  const [city, setCity] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeWrapper {...{ temp, setTemp, city, setCity }} />}
      >
        <Route
          index
          element={
            <Main
              setCurrentDay={setCurrentDay}
              list={undefined}
              city={undefined}
              name={""}
              main={{
                temp: 0,
              }}
              weather={[]}
              dt_txt={""}
              temp={temp}
            />
          }
        />
        <Route
          path="current"
          element={<CurrentPage {...{ temp, city, currentDay }} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
