import { createAction, handleActions } from 'redux-actions';

const initialState = {
  token: null,
};

export const tokenSelector = state => state.auth.token;

export const authRequested = createAction('AUTH_LOGIN_REQUESTED');
export const authReceived = createAction('AUTH_LOGIN_RECEIVED');

export default handleActions({
  [authReceived]: (state, { payload }) => ({
    ...state,
    token: payload.token,
  }),
}, initialState);
