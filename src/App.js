import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Routes from './routes';
import history from './history';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
