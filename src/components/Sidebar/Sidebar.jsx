import React from "react";
import css from "./Sidebar.module.css";
import meditation from "../../assets/meditation.svg";
import swim from "../../assets/swim.svg";
import cycle from "../../assets/cycle.svg";
import weight from "../../assets/weight.svg";
const Sidebar = () => {
  const links = [
    { name: "Meditation", img: meditation, path: "/" },
    { name: "Swim", img: swim, path: "/" },
    { name: "Cycle", img: cycle, path: "/" },
    { name: "Weight", img: weight, path: "/" },
  ];
  return (
    <div className={css.sidebar}>
      <div></div>
      <ul className={css.icons}>
        {links.map((link) => {
          return (
            <li className={css.icon}>
              <a href={link.path}>
                <img src={link.img} alt={link.name} />
              </a>
            </li>
          );
        })}
      </ul>
      <div className={css.copyrights}>Copyright, SportSee 2020</div>
    </div>
  );
};

export default Sidebar;
