import React from 'react';
//versión 17
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* 
ReactDOM.render(
  <App />,
  document.getElementById('root')
); */