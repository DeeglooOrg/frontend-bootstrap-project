import { ActionTypes } from '../../../domain/enums'

const initialState = {
  title: '',
  body: ''
}

const getApiDataReducer = (state = initialState, action) => {
  const newState = { ...state }

  if (action.type === ActionTypes.GET_API_DATA) {
    console.log('GET_API_DATA reducer');
    return {
      ...newState,
      title: action.payload.title,
      body: action.payload.body
    }
  } else {
    return newState;
  }
}

export default getApiDataReducer;
