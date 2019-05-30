/*eslint-disable no-unused-vars*/

import { ActionTypes } from '../../../domain/enums'
import { GetApiDataState } from '../../../domain/interfaces'

const initialState: GetApiDataState = {
  title: '',
  body: ''
}

const getApiDataReducer = (state = initialState, action): GetApiDataState => {
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
