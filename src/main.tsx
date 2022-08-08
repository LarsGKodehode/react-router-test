// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// CSS
import './assets/css/global.css';
import './assets/css/palettes.css';
import './assets/css/typography.css';
import './main.css';

// Fonts
import './assets/fonts/Karla/Karla-VariableFont_wght.ttf';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
