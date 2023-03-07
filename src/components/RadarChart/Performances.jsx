import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import css from "./Performances.module.css";

const Performances = ({ data }) => {
  const refactoredDatas = [
    { subject: "Intensité", perf: data[1].data[5].value },
    { subject: "Vitesse", perf: data[1].data[4].value },
    { subject: "Force", perf: data[1].data[3].value },
    { subject: "Endurance", perf: data[1].data[2].value },
    { subject: "Energie", perf: data[1].data[1].value },
    { subject: "Cardio", perf: data[1].data[0].value },
  ];
  return (
    <div className={css.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={70} cx="50%" cy="50%" data={refactoredDatas}>
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
  );
};

export default Performances;
