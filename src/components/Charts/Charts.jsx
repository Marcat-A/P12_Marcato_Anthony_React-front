import React from "react";
import ActivityChart from "../ActivityChart/ActivityChart";
import JaugeChart from "../JaugeChart/JaugeChart";
import Performances from "../RadarChart/Performances";
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
        <Performances data={usersPerformance} />
        <JaugeChart data={usersData} />
      </div>
    </div>
  );
};

export default Charts;
