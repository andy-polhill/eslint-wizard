import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiLogin } from '../api/github';
import { authRequested, authReceived } from '../store/auth';

export function* watchAuthRequest() {
  yield takeEvery(authRequested, auth);
}

function* auth() {
  try {
    const credentials = yield call(apiLogin);
    yield put(authReceived(credentials));
    yield put(push('/'));
  } catch (error) {
    console.log('error', error);
  }
}
