import { createAction, handleActions } from 'redux-actions';

export const TEAMS_LIST_RECEIVED = 'profile received';

const initialState = {
  teams: [],
};

export const teamsListReceived = createAction('TEAMS_LIST_RECEIVED');

export default handleActions({
  [teamsListReceived]: (state, { payload }) => ({
    ...state,
    teams: payload.teams,
  }),
}, initialState);
