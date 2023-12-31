import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ToasterProvider } from './provider/toastProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToasterProvider />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
