import React, { FunctionComponent } from 'react';
import styles from './OugH1.module.scss';

const OugH1: FunctionComponent<{ value: string }> = ({ value }) => (
  <h1 className={styles.h1}>{value}</h1>
);

export default OugH1;
