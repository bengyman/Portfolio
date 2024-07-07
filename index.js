import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
