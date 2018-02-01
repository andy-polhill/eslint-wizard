import { all, fork } from 'redux-saga/effects';
import { watchInitialiseFeatures } from './features';
import { watchLoginRequest } from './auth';
import { watchWizardStart } from './wizard';

export default function* rootSaga() {
  yield all([
    fork(watchInitialiseFeatures),
    fork(watchLoginRequest),
    fork(watchWizardStart),
  ]);
}
