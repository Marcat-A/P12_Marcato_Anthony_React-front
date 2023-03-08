import React from "react";
import ActivityChart from "../ActivityChart/ActivityChart";
import JaugeChart from "../JaugeChart/JaugeChart";
import Performances from "../RadarChart/Performances";
import TempChart from "../TempChart/TempChart";
import css from "./Charts.module.css";
import Proptypes from "prop-types";

const Charts = ({ user, activity, sessions, performances }) => {
  return (
    <div className={css.container}>
      <ActivityChart data={activity?.data} />
      <div className={css.secondContainer}>
        <TempChart data={sessions?.data} />
        <Performances data={performances?.data} />
        <JaugeChart data={user?.data} />
      </div>
    </div>
  );
};

Charts.propTypes = {
  user: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
  activity: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
  sessions: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
  performances: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
};

export default Charts;
