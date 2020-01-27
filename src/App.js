import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import 'antd/dist/antd.css';
import Routes from './routes';
import history from './history';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
