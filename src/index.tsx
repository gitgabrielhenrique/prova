import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cadeiras from './pages/cadeiras';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cadeiras />
  </React.StrictMode>
);
