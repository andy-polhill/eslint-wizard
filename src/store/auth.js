import { createAction, handleActions } from 'redux-actions';

const initialState = {
  token: null,
};

export const tokenSelector = state => state.auth.token;

export const authLoginRequested = createAction('AUTH_LOGIN_REQUESTED');
export const authLoginReceived = createAction('AUTH_LOGIN_RECEIVED');
export const authLogoutRequested = createAction('AUTH_LOGOUT_REQUESTED');

export default handleActions({
  [authLoginReceived]: (state, { payload }) => ({
    ...state,
    token: payload.token,
  }),
  [authLogoutRequested]: () => ({
    ...initialState,
  }),
}, initialState);
