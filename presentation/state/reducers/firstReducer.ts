/*eslint-disable no-unused-vars*/

import { ActionTypes } from '../../../domain/enums'
import { ChangeMessageState } from '../../../domain/interfaces'

const initialState: ChangeMessageState = {
  message: 'Some random message from redux state',
};

interface Action {
  type: string;
  payload: string
}

const secondReducer = (state = initialState, action: Action): ChangeMessageState => {
  const newState = { ...state };

  if (action.type === ActionTypes.CHANGE_MESSAGE) {
    return {
      ...newState,
      message: action.payload,
    };
  } else {
    return newState;
  }
};

export default secondReducer;
