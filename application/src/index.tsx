import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../../presentation/state/store'

const store = configureStore({});

const root = document.createElement('div')
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root
);
