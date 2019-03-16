import React, { Component } from 'react';
import styles from './App.module.scss';
import OugDummySpiralEnter from './components/organisms/OugDummySpiralEnter';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <OugDummySpiralEnter />
        </header>
      </div>
    );
  }
}

export default App;
