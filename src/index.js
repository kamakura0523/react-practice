import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import EventMouse from './EventMouse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <EventMouse alt={"ロゴ画像"} beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif" afterSrc="https://www.web-deli.com/image/home_chara.gif"
  />
  </React.StrictMode>
);