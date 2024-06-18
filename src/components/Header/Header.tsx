import React from "react";
import Search from "./Search";
import Temp from "./Temp";
import "./Header.scss";

export interface HeaderProps {
  temp: string;
  setTemp: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCurrentDay: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ temp, setTemp, city, setCity }) => {
  return (
    <div className="header">
      <Search temp={temp} city={city} setCity={setCity} />
      <Temp city={city} temp={temp} setTemp={setTemp} />
    </div>
  );
};

export default Header;
