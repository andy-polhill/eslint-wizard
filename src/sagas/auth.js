import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiLogin, apiGetTeams } from '../api/github';
import {
  authLoginRequested,
  authProfileReceived,
} from '../store/auth';
import { teamsListReceived } from '../store/teams';

export function* watchLoginRequest() {
  yield takeEvery(authLoginRequested, auth);
}

export function* auth() {
  try {
    yield call(apiLogin);
    // yield put(push('/'));
    const code = new URLSearchParams(document.location).get('code');
    console.log('code', code);
    // yield put(authProfileReceived({ credential, user }));
    // const { teams } = yield call(apiGetTeams, credential.accessToken);
    // yield put(teamsListReceived({ teams }));
    // yield put(push('/'));
  } catch (error) {
    console.log('error');
  }
}
