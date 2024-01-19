// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';
// Другие импорты, если они есть...

const container = document.getElementById('root');
const root = createRoot(container); // Создаем корень.

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
