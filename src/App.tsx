// LIBRARIES
import React from 'react';
import {
  HashRouter as Router,
  Link,
} from 'react-router-dom';

// CSS
import styles from './App.module.css';
import NavHeader, { NavHeaderProp } from './components/nav-header/Nav-header';

// COMPONENT
function App() {

  const NavHeaderProps: NavHeaderProp = {
    title: "React Router Test",
    linksProps: [
      
    ],
  };

  return (
    <Router>
      <NavHeader {...NavHeaderProps}/>
      <nav id='App' className={styles["App"]} data-theme='bright'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </ Router>
  );
};

export default App;