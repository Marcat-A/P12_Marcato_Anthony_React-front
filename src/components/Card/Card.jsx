import React from "react";
import css from "./Card.module.css";

const Card = ({ icon, color, text, data }) => {
  return (
    <div className={css.container}>
      <div className={css.img} style={{ backgroundColor: color }}>
        <img src={icon} alt={text} />
      </div>
      <div className={css.text}>
        <span>{data}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Card;
