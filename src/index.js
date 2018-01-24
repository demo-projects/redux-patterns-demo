import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'milligram/dist/milligram.css';
import './assets/app.css';

import App from './components/App';
import {store} from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

