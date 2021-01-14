import React from 'react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';

import {
  Dashboard
} from './components';
import Store from './store';


const App = () => {
  return <Provider store={Store}>
    <Dashboard />
  </Provider>;
};

export default App;
