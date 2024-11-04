// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.tsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>
// );


// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
