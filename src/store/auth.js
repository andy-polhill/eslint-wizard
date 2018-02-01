import { createAction, handleActions } from 'redux-actions';

const initialState = {
  token: null,
};

export const tokenSelector = state => state.auth.token;

export const authLoginRequested = createAction('AUTH_LOGIN_REQUESTED');
export const authCredentialsReceived = createAction('AUTH_LOGIN_RECEIVED');

export default handleActions({
  [authCredentialsReceived]: (state, { payload }) => ({
    ...state,
    token: payload.token,
  }),
}, initialState);
