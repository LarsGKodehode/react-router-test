// LIBRARIES
import {
  Link,
  Outlet,
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
    <div id='App' className={styles["App"]} data-theme='bright'>
      <NavHeader {...NavHeaderProps}/>
      <nav>
        <Link
          style={{margin: "1em"}}
          to='home'
        >
          Home
        </Link>

        <Link
          style={{margin: "1em"}}
          to='about'
        >
          About
        </Link>

        <Link
          style={{margin: "1em"}}
          to='invoices'
        >
          Invoices
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;