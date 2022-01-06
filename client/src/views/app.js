import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from '../history';

const App = () =>
  <Router history={ history }>
    <Fragment>
      <Routes />
    </Fragment>
  </Router>;

export default App;
