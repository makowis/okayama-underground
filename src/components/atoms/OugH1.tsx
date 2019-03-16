import React, { Component } from 'react';
import styles from './OugH1.module.scss';

class OugH1 extends Component<{ value: string }> {
  render() {
    return <h1 className={styles.h1}>{this.props.value}</h1>;
  }
}

export default OugH1;
