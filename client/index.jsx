/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

import './styles/styles.scss';

const root = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root,
);
