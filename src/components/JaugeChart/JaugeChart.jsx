import React from "react";
import css from "./JaugeChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Proptypes from "prop-types";

const JaugeChart = ({ data }) => {
  /**
   * @param {Number} value Statistic retrieval for the score value if it exists, else null
   */
  const refactoredData = [
    {
      value: data?.score
        ? data.score
        : data?.todayScore
        ? data.todayScore
        : null,
    },
    {
      value: data?.score
        ? 1 - data.score
        : data?.todayScore
        ? 1 - data.todayScore
        : null,
    },
  ];
  return data !== [] ? (
    <div className={css.container}>
      <h2 className={css.title}>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={refactoredData}
            cx={"50%"}
            cy={"55%"}
            fill="#ff0000"
            paddingAngle={5}
            dataKey="value"
            innerRadius={70}
            domain={[0, 1]}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
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
  ) : (
    ""
  );
};
JaugeChart.propTypes = {
  data: Proptypes.shape({
    id: Proptypes.number,
    keyData: Proptypes.shape({
      calorieCount: Proptypes.number,
      carbohydrateCount: Proptypes.number,
      lipidCount: Proptypes.number,
      proteinCount: Proptypes.number,
    }),
    score: Proptypes.number,
    todayScore: Proptypes.number,
    userInfos: Proptypes.object,
  }),
};

export default JaugeChart;
