import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Pizzaria Belíssima carregado!");

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    React.createElement(React.StrictMode, null, 
      React.createElement(App, null)
    )
  );
}
