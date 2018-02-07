import { createAction, handleActions } from 'redux-actions';

const initialState = {
  name: null,
  login: null,
  id: null,
  avatarUrl: null,
};

export const profileRequested = createAction('PROFILE_REQUESTED');
export const profileReceived = createAction('PROFILE_RECEIVED');

export default handleActions({
  [profileReceived]: (state, { payload }) => ({
    ...state,
    avatarUrl: payload.avatar_url,
    id: payload.id,
    login: payload.login,
    name: payload.name,
  }),
}, initialState);
