import React from "react";
import ActivityChart from "../ActivityChart/ActivityChart";
import JaugeChart from "../JaugeChart/JaugeChart";
import RadarChart from "../RadarChart/RadarChart";
import TempChart from "../TempChart/TempChart";
import css from "./Charts.module.css";

const Charts = ({ data }) => {
  const { usersActivity, usersAverageSessions, usersData, usersPerformance } =
    data;

  return (
    <div className={css.container}>
      <ActivityChart data={usersActivity} />
      <div className={css.secondContainer}>
        <TempChart data={usersAverageSessions} />
        <RadarChart />
        <JaugeChart />
      </div>
    </div>
  );
};

export default Charts;
