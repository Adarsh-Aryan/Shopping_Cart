import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopState from './Context/shopContext';


ReactDOM.render(
  <React.StrictMode>
    <ShopState>
      <App />
    </ShopState>
  </React.StrictMode>,
  document.getElementById('root')
);


