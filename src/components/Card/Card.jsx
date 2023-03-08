import React from "react";
import css from "./Card.module.css";
import PropTypes from "prop-types";

/**
 *
 * @param {HTMLImageElement} icon Image fetched from Resume
 * @param {String} color Color fetched from the component in Resume
 * @param {String} text text fetched from the component in Resume
 * @param {String} data data fetched from the component in Resume
 * @returns
 */
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

Card.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.string,
};

export default Card;
