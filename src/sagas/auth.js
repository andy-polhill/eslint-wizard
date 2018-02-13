import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiLogin } from '../api/github';
import { authLoginRequested, authLoginReceived } from '../store/auth';
import { profileRequested } from '../store/profile';

export function* watchAuthRequest() {
  yield takeEvery(authLoginRequested, auth);
}

function* auth() {
  try {
    const credentials = yield call(apiLogin);
    yield put(authLoginReceived(credentials));
    yield put(profileRequested(credentials.token));
  } catch (error) {
    console.log('error', error);
  }
}
