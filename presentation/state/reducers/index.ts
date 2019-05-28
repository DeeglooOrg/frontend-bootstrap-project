import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import getApiDataReducer from './getApiDataReducer';

const rootReducer = combineReducers({
  firstReducer,
  getApiDataReducer
});

export default rootReducer;
