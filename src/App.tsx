import React, { Component } from 'react';
import styles from './App.module.scss';
import OugDummySpiralEnter from './components/organisms/OugDummySpiralEnter';
import OugH1 from './components/atoms/OugH1';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <OugH1 value="岡山アンダーグラウンド" />
        </header>
        <main>
          <OugDummySpiralEnter />
        </main>
      </div>
    );
  }
}

export default App;
