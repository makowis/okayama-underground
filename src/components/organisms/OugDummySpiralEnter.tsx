import React, { FunctionComponent } from 'react';
import OugDummyEnterLink from '../atoms/OugDummyEnterLink';
import styles from './OugDummySpiralEnter.module.scss';

const styleLinks = [
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
];

const OugDummyEnterLinkWrapper: FunctionComponent<string> = value => (
  <OugDummyEnterLink key={value} className={value} />
);

const OugDummySpiralEnter: FunctionComponent = () => (
  <div className={styles.container}>
    {styleLinks.map(OugDummyEnterLinkWrapper)}
  </div>
);

export default OugDummySpiralEnter;
