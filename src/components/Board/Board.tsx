import React, { FC } from 'react';
import InfomationBoard from '../Infomation-board/Infomation-board';
import Mainboard from '../Mainboard/Mainboard';
import styles from './Board.module.css';

interface BoardProps {}

const Board: FC<BoardProps> = () => (
  <div className={styles.Board}>
    <InfomationBoard/>
    <Mainboard/>
  </div>
);

export default Board;
