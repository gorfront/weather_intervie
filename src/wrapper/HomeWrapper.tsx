import { Outlet } from "react-router-dom";
import Header, { HeaderProps } from "../components/Header/Header";

const HomeWrapper: React.FC<HeaderProps> = ({
  temp,
  setTemp,
  city,
  setCity,
}) => {
  return (
    <>
      <Header {...{ temp, setTemp, city, setCity }} />
      <Outlet />
    </>
  );
};

export default HomeWrapper;
