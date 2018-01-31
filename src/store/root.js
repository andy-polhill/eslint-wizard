import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import features from './features';
import auth from './auth';
import notifications from './notifications';
import teams from './teams';

export default combineReducers({
  auth,
  features,
  notifications,
  routerReducer,
  teams,
});
