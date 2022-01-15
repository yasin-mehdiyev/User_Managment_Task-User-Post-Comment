import React from 'react';
import ReactDOM from 'react-dom';
// React Redux Provider and Redux Persist --- START
import { Provider } from 'react-redux';
import store, { persistor } from './redux/root/store';
import { PersistGate } from "redux-persist/integration/react";
// --- END
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
