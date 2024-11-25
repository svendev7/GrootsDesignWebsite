import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure no '.js' extension is needed here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
