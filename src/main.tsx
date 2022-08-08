// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


// CSS
import './assets/css/global.css';
import './assets/css/palettes.css';
import './assets/css/typography.css';
import './main.css';

// Fonts
import './assets/fonts/Karla/Karla-VariableFont_wght.ttf';
import { HashRouter } from 'react-router-dom';


// Components
import App from './App';
import Home from './routes/home/Home';
import About from './routes/about/About';


/**
 * DEVELOPMENT
 * clears console of error messages between hotswaps
 * @link https://github.com/vitejs/vite/discussions/3143
 */ 
 if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}
// DEVELOPMENT


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
