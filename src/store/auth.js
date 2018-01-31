import { createAction, handleActions } from 'redux-actions';

export const PROFILE_DATA_RETRIEVED = 'profile received';

const initialState = {
  accessToken: null,
  displayName: null,
  email: null,
  id: null,
  imageUrl: null,
  user: null,
};

export const authLoginRequested = createAction('AUTH_LOGIN_REQUESTED');
export const authProfileReceived = createAction('AUTH_PROFILE_RECEIVED');

export default handleActions({
  [authProfileReceived]: (state, { payload }) => ({
    ...state,
    accessToken: payload.credential.accessToken,
    displayName: payload.user.displayName,
    email: payload.user.email,
    id: payload.user.uid,
    imageUrl: payload.user.photoURL,
  }),
}, initialState);
