import React, { FC } from 'react';
import styles from './AboutMe.module.css';

interface AboutMeProps {}

const Mainboard: FC<AboutMeProps> = () => (
  <div className={styles.AboutMe}>
    AboutMe
  </div>
);

export default Mainboard;
