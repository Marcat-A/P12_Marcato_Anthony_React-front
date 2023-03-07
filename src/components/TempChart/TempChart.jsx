import React from "react";
import css from "./TempChart.module.css";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

const TempChart = ({ data }) => {
  console.log(data[1].sessions);
  return (
    <div className={css.container}>
      <h2 className={css.title}>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data[1].sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis domain={[0, "dataMax + 20"]} hide={true} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={3}
            dot={false}
            activeDot={{ stroke: "#FFFFFF33", strokeWidth: 10, r: 5 }}
            strokeDashArray="4"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className={css.customTooltip}>
        <p className={css.label}>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

export default TempChart;
