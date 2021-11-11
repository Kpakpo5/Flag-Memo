import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store'
import reportWebVitals from './reportWebVitals';

const rootReactElement = (
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
  );

const target = document.getElementById('root');

render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
