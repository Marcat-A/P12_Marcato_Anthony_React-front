import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import css from "./Performances.module.css";
import Proptypes from "prop-types";

const Performances = ({ data }) => {
  /**
   *
   * @param {String} subject // Name of each corner
   * @param {Number} perf // Statistics retrieval for each subject, default on 1
   */
  const refactoredDatas = [
    {
      subject: "Intensité",
      perf: data?.data[5].value ? data.data[5].value : 1,
    },
    { subject: "Vitesse", perf: data?.data[4].value ? data.data[4].value : 1 },
    { subject: "Force", perf: data?.data[3].value ? data.data[3].value : 1 },
    {
      subject: "Endurance",
      perf: data?.data[2].value ? data.data[2].value : 1,
    },
    { subject: "Energie", perf: data?.data[1].value ? data.data[1].value : 1 },
    { subject: "Cardio", perf: data?.data[0].value ? data.data[0].value : 1 },
  ];
  return data !== [] ? (
    <div className={css.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} cx="50%" cy="50%" data={refactoredDatas}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar dataKey="perf" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    ""
  );
};

Performances.propTypes = {
  data: Proptypes.shape({
    userId: Proptypes.number,
    data: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
    kind: Proptypes.object,
  }),
};

export default Performances;
