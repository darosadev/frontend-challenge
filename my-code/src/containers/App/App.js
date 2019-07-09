import React from 'react';
import styles from './App.module.css';
import Header from '../../components/Header/Header';
import logo from '../../assets/logo/logo.svg'

function App() {
  return (
    <div className={styles.App}>
        <div className={styles.container}>
          <Header appLogo={logo}/>
        </div>
    </div>

  );
}

export default App;
