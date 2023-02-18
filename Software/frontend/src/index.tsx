import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const buttons = document.getElementsByTagName("button");
const boxes = document.getElementsByClassName("box");

const arr = Array.prototype.map.call(boxes, box => box.innerHTML);
buttons[0].onclick = function() {
  arr.push(arr.shift());
  Array.prototype.forEach.call(boxes, (box, ind) => box.innerHTML = arr[ind]);
}

buttons[1].onclick = function() {
  arr.unshift(arr.pop());
  Array.prototype.forEach.call(boxes, (box, ind) => box.innerHTML = arr[ind]);
}