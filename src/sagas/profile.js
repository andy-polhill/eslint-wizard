import { call, put, select, takeEvery } from 'redux-saga/effects';
import { apiGetUser } from '../api/github';
import { profileRequested, profileReceived } from '../store/profile';
import { tokenSelector } from '../store/auth';

export function* watchProfileRequest() {
  yield takeEvery(profileRequested, getProfile);
}

function* getProfile() {
  try {
    const token = yield select(tokenSelector);
    const profile = yield call(apiGetUser, token);
    yield put(profileReceived(profile));
  } catch (error) {
    console.log('error', error);
  }
}
