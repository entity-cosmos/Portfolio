import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import analytics from '@vercel/analytics';

const analyticsClient = analytics('prj_JLraOt61o7ZaZFmLqsD23z8enn8S');

analyticsClient.track('page_view', {
  path: window.location.pathname,
  referrer: document.referrer,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
