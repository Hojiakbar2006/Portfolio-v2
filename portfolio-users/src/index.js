import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
        <App />
    </Provider>  </React.StrictMode>
);
