import React, { FC } from "react";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import styles from "./Mainboard.module.css";
import { Route, Link, NavLink, Routes } from "react-router-dom";

interface MainboardProps {}

const Mainboard: FC<MainboardProps> = () => (
  <div className={styles.Mainboard}>
    <li>
      <NavLink to="/Home">to Home</NavLink>
      <NavLink to="/AboutMe">to about me</NavLink>
    </li>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  </div>
);

export default Mainboard;
