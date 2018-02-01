import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiLogin, apiGetUser } from '../api/github';
import { profileReceived } from '../store/profile';
import {
  authLoginRequested,
  authCredentialsReceived,
} from '../store/auth';

export function* watchLoginRequest() {
  yield takeEvery(authLoginRequested, auth);
}

function* auth() {
  try {
    const credentials = yield call(apiLogin);
    const profile = yield call(apiGetUser, credentials.token);
    yield put(profileReceived(profile));
    yield put(authCredentialsReceived(credentials));
    yield put(push('/'));
  } catch (error) {
    console.log('error', error);
  }
}
