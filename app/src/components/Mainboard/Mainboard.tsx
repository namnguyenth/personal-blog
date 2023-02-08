import React, { FC } from "react";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import styles from "./Mainboard.module.css";
import { Route, Routes } from "react-router-dom";

interface MainboardProps {}

const Mainboard: FC<MainboardProps> = () => (
  <div className={styles.Mainboard}>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  </div>
);

export default Mainboard;
