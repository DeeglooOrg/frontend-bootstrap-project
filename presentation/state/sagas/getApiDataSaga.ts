import { ActionTypes } from '../../../domain/enums'
import { put } from 'redux-saga/effects';

function* getApiDataSaga() {
  const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(res => {
      console.log('res in getApiDataSaga', res);
      return res
    });

  const postData = {
    title: response.title,
    body: response.body
  }

  yield put({
    type: ActionTypes.GET_API_DATA,
    payload: postData
  })
}

export default getApiDataSaga;
