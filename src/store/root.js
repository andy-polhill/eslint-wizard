import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import features from './features';
import notifications from './notifications';
import profile from './profile';
import teams from './teams';

export default combineReducers({
  auth,
  features,
  notifications,
  profile,
  routerReducer,
  teams,
});
