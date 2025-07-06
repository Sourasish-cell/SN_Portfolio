import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 