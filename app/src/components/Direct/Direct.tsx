import React, { FC } from 'react';
import styles from './Direct.module.css';

interface DirectProps {}

const Direct: FC<DirectProps> = () => (
  <div className={styles.Direct}>
    Direct Component
  </div>
);

export default Direct;
