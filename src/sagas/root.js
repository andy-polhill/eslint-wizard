import { all, fork } from 'redux-saga/effects';
import { watchInitialiseFeatures } from './features';
import { watchAuthRequest } from './auth';
import { watchProfileRequest } from './profile';
import { watchWizardStart } from './wizard';

export default function* rootSaga() {
  yield all([
    fork(watchInitialiseFeatures),
    fork(watchAuthRequest),
    fork(watchWizardStart),
    fork(watchProfileRequest),
  ]);
}
