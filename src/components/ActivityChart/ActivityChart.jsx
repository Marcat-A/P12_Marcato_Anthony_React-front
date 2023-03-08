import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Proptypes from "prop-types";

import css from "./ActivityChart.module.css";

export default function ActivityChart({ data }) {
  return data !== [] ? (
    <div className={css.container}>
      <div className={css.text}>
        <h2 className={css.title}>Activité quotidienne</h2>
        <ul className={css.legend}>
          <li className={css.tip}>Poids (kg)</li>
          <li className={css.tip}>Calories Brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className="barChart"
          margin={{
            top: 20,
            right: 0,
            bottom: 30,
            left: 0,
          }}
          legendType="circle"
          data={data?.sessions}
          barGap={8}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dy={20}
            dataKey="day"
            tick={{ fontSize: 16, fill: "#74798c" }}
            tickLine={false}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tick={{ fontSize: 18, fill: "#74798c", strokeWidth: 6 }}
            tickLine={false}
            dx={20}
            interval="number"
            allowDecimals={false}
            dataKey="kilogram"
            domain={[0, "auto"]}
            yAxisId="kg"
          />
          <YAxis
            orientation="right"
            tick={{ fontSize: 18, fill: "#74798c", strokeWidth: 6 }}
            tickLine={false}
            dataKey="calories"
            domain={[0, "auto"]}
            yAxisId="kCal"
            hide={true}
          />

          <Tooltip
            cursor={{ fill: "#C4C4C4", opacity: "0.5" }}
            content={<CustomToolTip />}
          />
          <Bar
            dataKey="calories"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={9}
            yAxisId="kCal"
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    ""
  );
}

ActivityChart.propTypes = {
  data: Proptypes.shape({
    userId: Proptypes.number,
    sessions: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
  }),
};

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className={css.customToolTip}>
        <p className={css.label}>{`${payload[1].value}kg`}</p>
        <p className={css.label}>{`${payload[0].value}Kcal`}</p>
      </div>
    );
  }
};
