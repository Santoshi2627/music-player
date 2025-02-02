import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from "./myapp"
// import MusicFetcher from './music';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import PlayerProvider from './context/playercontext';
import User from './components/userdetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerProvider>
    <App/>
    <User/>
    </PlayerProvider>
    {/* <App /> */}
    {/* <App/> */}
    </BrowserRouter>
    {/* <MusicFetcher/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
