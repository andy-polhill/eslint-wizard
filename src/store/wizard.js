import { createAction, handleActions } from 'redux-actions';

const initialState = {

};

export const wizardStart = createAction('WIZARD_START');
export const wizardReceiveGist = createAction('WIZARD_RECEIVE_GIST');

export default handleActions({
  [wizardReceiveGist]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);
