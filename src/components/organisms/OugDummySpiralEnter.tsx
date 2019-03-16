import React, { Component } from 'react';
import OugDummyEnterLink from '../atoms/OugDummyEnterLink';
import styles from './OugDummySpiralEnter.module.scss';

class OugDummySpiralEnter extends Component {
  render() {
    return [
      styles.link1,
      styles.link2,
      styles.link3,
      styles.link4,
      styles.link5,
      styles.link6,
      styles.link7,
      styles.link8,
      styles.link9,
      styles.link10
    ].map(value => {
      return <OugDummyEnterLink key={value} className={value} />;
    });
  }
}

export default OugDummySpiralEnter;
