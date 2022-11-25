import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { I18nextProvider } from 'react-i18next';

import i18n from './locales/i18n';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </I18nextProvider>,
  mountNode
);
