/*eslint-disable no-unused-vars*/

import { ActionTypes } from '../../../domain/enums'
import { Auth } from '../../../domain/interfaces/Auth';

const initialState: Auth = {
  isAuthenticated: false
}

interface Action {
  type: string,
  payload: boolean
}

const authReducer = (state = initialState, action: Action): Auth => {
  const newState = { ...state };

  if (action.type === ActionTypes.LOGIN) {
    return {
      ...newState,
      isAuthenticated: action.payload
    }
  } else if (action.type === ActionTypes.LOGOUT) {
    return {
      ...newState,
      isAuthenticated: action.payload
    }
  } else {
    return newState;
  }
};

export default authReducer;
