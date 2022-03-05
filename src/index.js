import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ripple } from './components/rippleButton';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*

  # Welcome to #LeapGest whitepaper tutorial app

    */


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

 //
// Add ripple effect to buttons

let buttonElements = document.getElementsByClassName('btn');

for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener('click', ripple);
}

console.log("asd welcome to console, again");

// Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);