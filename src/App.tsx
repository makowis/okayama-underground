import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <a
            className={styles.link}
            href="https://www.yahoo.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ENTER
          </a>
        </header>
      </div>
    );
  }
}

export default App;
