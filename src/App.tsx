import React, { Component } from 'react';
import styles from './App.module.scss';
import OugDummyEnterLink from './components/atoms/OugDummyEnterLink';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          {[
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
          })}
        </header>
      </div>
    );
  }
}

export default App;
