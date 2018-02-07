import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiCreateGist } from '../api/github';
import { tokenSelector } from '../store/auth';
import { wizardStart, wizardReceiveGist } from '../store/wizard';

export function* watchWizardStart() {
  yield takeEvery(wizardStart, start);
}

function* start() {
  try {
    const token = yield select(tokenSelector);
    // const gist = yield call(apiCreateGist, token);
    // yield put(wizardReceiveGist(gist));
    yield put(push('/rule/arrow-parens'));
  } catch (error) {
    console.log('error', error);
  }
}
