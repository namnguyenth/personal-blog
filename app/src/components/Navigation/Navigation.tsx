import React, { FC } from "react";
import styles from "./Navigation.module.css";
import { Route, Link, NavLink, Routes } from "react-router-dom";

interface NavigationProps {}
const path = [
  {
    title: "home",
    path: "/Home",
    className: 'menu-icon lnr lnr-home'
  },
  {
    title: "aboutme",
    path: "/AboutMe",
    className: 'menu-icon lnr lnr-home'
  },
  {
    title: "resume",
    path: "/Resume",
    className: 'menu-icon lnr lnr-home'
  },
  {
    title: "portfolio",
    path: "/Portfolio",
    className: 'menu-icon lnr lnr-home'
  },
  {
    title: "blog",
    path: "/Blog",
    className: 'menu-icon lnr lnr-home'
  },
  {
    title: "contact",
    path: "/Contact",
    className: 'menu-icon lnr lnr-home'
  },
];

const listPath = path.map((item) => (
  <li className="active">
    <a className="nav-anim">
      <span className={item.className}></span>
      <span className="link-text">
        <NavLink to={item.path}>{1}</NavLink>
      </span>
    </a>
  </li>
));

const Navigation: FC<NavigationProps> = () => (
  <div className={styles.Navigation}>
    <ul className="main-menu">
      {listPath}
    </ul>
  </div>
);

export default Navigation;
