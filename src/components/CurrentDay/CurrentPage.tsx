import React from "react";
import CurrentDay from "./CurrentDay";

interface CurrentPageProps {
  currentDay: number;
  temp: string;
}

const CurrentPage: React.FC<CurrentPageProps> = ({ currentDay, temp }) => {
  return (
    <div>
      <CurrentDay {...{ currentDay, temp }} />
    </div>
  );
};

export default CurrentPage;
