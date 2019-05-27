const initialState = {
  message: 'Some random message from redux state',
};

export interface Action {
  type: string;
  payload: string
}

const secondReducer = (state = initialState, action: Action) => {
  const newState = { ...state };

  if (action.type === 'CHANGE_MESSAGE') {
    return {
      ...newState,
      message: action.payload,
    };
  } else {
    return newState;
  }
};

export default secondReducer;
