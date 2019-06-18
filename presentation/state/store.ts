import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers/index';
import getApiDataSaga from './sagas/getApiDataSaga';

export const history = createBrowserHistory({});

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {

  // hot reload for reducers
  if (module.hot) {
    module.hot.accept('./reducers/', () => {
      console.log('reducer module hot scope');
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
      (<any>window).__REDUX_DEVTOOLS_EXTENSION__
        ? (<any>window).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
    )
  )

  sagaMiddleware.run(getApiDataSaga);

  return store
}
