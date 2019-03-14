import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          { 
            [styles.link1
            ,styles.link2
            ,styles.link3
            ,styles.link4
            ,styles.link5
            ,styles.link6
            ,styles.link7
            ,styles.link8
            ,styles.link9
            ,styles.link10].map((value) => {
              return <a
                className={value}
                href="https://www.yahoo.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ENTER
              </a>
            })}
        </header>
      </div>
    );
  }
}

export default App;
