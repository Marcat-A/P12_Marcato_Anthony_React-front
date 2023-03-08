import React from "react";
import Card from "../Card/Card";
import css from "./Resume.module.css";
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import Proptypes from "prop-types";

const Resume = ({ data }) => {
  let calories = data ? data.calorieCount / 1000 : 1;
  let proteines = data ? data.proteinCount : 1;
  let lipides = data ? data.lipidCount : 1;
  let glucides = data ? data.carbohydrateCount : 1;
  return (
    <div className={css.container}>
      <Card
        icon={energy}
        color={"rgba(255, 0, 0, 0.1)"}
        text={"Calories"}
        data={`${calories.toPrecision(4)}kCal`}
      />
      <Card
        icon={chicken}
        color={"rgba(74, 184, 255, 0.1)"}
        text={"Proteines"}
        data={`${proteines}g`}
      />
      <Card
        icon={apple}
        color={"rgba(249, 206, 35, 0.1)"}
        text={"Glucides"}
        data={`${glucides}g`}
      />
      <Card
        icon={cheeseburger}
        color={"rgba(253, 81, 129, 0.1)"}
        text={"Lipides"}
        data={`${lipides}g`}
      />
    </div>
  );
};

Resume.propTypes = {
  data: Proptypes.object,
};

export default Resume;
