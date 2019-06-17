import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import firstReducer from './firstReducer';
import getApiDataReducer from './getApiDataReducer';
import authReducer from './authReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  firstReducer,
  getApiDataReducer,
  auth: authReducer,
})
