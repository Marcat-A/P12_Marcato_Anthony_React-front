import React from "react";
import css from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const links = [
  { name: "Accueil", path: "/" },
  { name: "Profil", path: "/" },
  { name: "Réglages", path: "/" },
  { name: "Communauté", path: "/" },
];

const Navbar = () => {
  return (
    <header className={css.navbar}>
      <div className={css.logo}>
        <img src={logo} alt="Logo de l'entreprise" />
      </div>
      <ul className={css.links}>
        {links.map((link) => {
          return (
            <li>
              <a href={link.path} className={css.link}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
