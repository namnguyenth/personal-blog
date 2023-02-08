import React, { FC } from 'react';
import styles from './Infomation-board.module.css';

interface InfomationBoardProps {}

const InfomationBoard: FC<InfomationBoardProps> = () => (
  <div className={styles.InfomationBoard}>
    InfomationBoard Component
  </div>
);

export default InfomationBoard;
