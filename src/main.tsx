// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


// CSS
import './assets/css/global.css';
import './assets/css/palettes.css';
import './assets/css/typography.css';
import './main.css';

// Fonts
import './assets/fonts/Karla/Karla-VariableFont_wght.ttf';


// Components
import App from './App';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Invoices from './routes/invoices/Invoices';
import Invoice from './data/invoice';
import Missing404 from './routes/Missing404/Missing404';



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
        <Route path='/' element={<App />}>

          <Route path='home' element={<Home />} />

          <Route path='about' element={<About />} />

          <Route path='invoices' element={<Invoices />}>
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<Missing404 />} />

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
