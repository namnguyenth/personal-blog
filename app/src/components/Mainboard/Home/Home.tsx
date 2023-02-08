import React, { FC } from 'react';
import styles from './Home.module.css';

interface HomeProps {}

const Mainboard: FC<HomeProps> = () => (
  <div className={styles.Home}>
    home
  </div>
);

export default Mainboard;
