import Search from "./Search";
import Temp from "./Temp";
import "./Header.scss";

export interface HeaderProps {
  temp: string;
  setTemp: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ temp, setTemp, city, setCity }) => {
  return (
    <div className="header">
      <Search {...{ temp, city, setCity }} />
      <Temp city={city} {...{ temp, setTemp }} />
    </div>
  );
};

export default Header;
