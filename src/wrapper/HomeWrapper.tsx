import { Outlet } from "react-router-dom";
import Header, { HeaderProps } from "../components/Header/Header";
import MoreDaysTemp from "../components/Main/MoreDaysTemp";

const HomeWrapper: React.FC<HeaderProps> = ({
  temp,
  setTemp,
  city,
  setCity,
  setCurrentDay,
}) => {
  return (
    <>
      <Header {...{ temp, setTemp, city, setCity, setCurrentDay }} />
      <Outlet />
      <MoreDaysTemp setCurrentDay={setCurrentDay} temp={temp} />
    </>
  );
};

export default HomeWrapper;
