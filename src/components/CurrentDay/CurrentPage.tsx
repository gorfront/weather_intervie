import MoreDaysTemp from "../Main/MoreDaysTemp";
import CurrentDay from "./CurrentDay";

interface CurrentPageProps {
  currentDay: number;
}

const CurrentPage: React.FC<CurrentPageProps> = ({ currentDay }) => {
  return (
    <div>
      <CurrentDay temp={""} city={""} currentDay={currentDay} />
      <MoreDaysTemp setCurrentDay={() => {}} temp="" />
    </div>
  );
};

export default CurrentPage;
