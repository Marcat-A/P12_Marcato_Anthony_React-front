import React from "react";
import css from "./JaugeChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Proptypes from "prop-types";

const JaugeChart = ({ data }) => {
  console.log(data);
  const refactoredData = [
    { value: data?.score ? data.score : 1 },
    { value: 1 - data?.score ? data.score : 1 },
  ];
  return data !== [] ? (
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
    userInfos: Proptypes.object,
  }),
};

export default JaugeChart;
