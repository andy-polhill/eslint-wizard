import { all, fork } from 'redux-saga/effects';
import { watchInitialiseFeatures } from './features';
import { watchLoginRequest } from './auth';

export default function* rootSaga() {
  yield all([
    fork(watchInitialiseFeatures),
    fork(watchLoginRequest)
  ]);
}
