import React from "react";
import css from "./JaugeChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const JaugeChart = ({ data }) => {
  const refactoredData = [
    { value: data[1].score },
    { value: 1 - data[1].score },
  ];
  return (
    <div className={css.container}>
      <h2 className={css.title}>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={refactoredData}
            cx={"50%"}
            cy={"60%"}
            fill="#ff0000"
            paddingAngle={5}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
          >
            <Cell className="cell" fill={"#ff0101"} cornerRadius="50%" />
            <Cell
              className="cell"
              fill={"transparent"}
              cornerRadius="50%"
              margin={{
                top: 0,
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className={css.score}>
        {refactoredData[0].value * 100}% <span>de votre objectif</span>
      </p>
    </div>
  );
};

export default JaugeChart;
