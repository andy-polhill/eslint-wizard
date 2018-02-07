import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStateMiddleware from 'redux-localstorage';
import sagas from '../sagas/root';
import reducers from './root';

export default (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const stateMiddleware = createStateMiddleware('auth', { key: 'wizard' });
  const middlewares = [sagaMiddleware, routerMiddleware];
  middlewares.push(createSagaMiddleware());

  if (typeof document !== 'undefined' && process.env.MIXPANEL_TOKEN) {
    middlewares.push(require('remimi').default(process.env.MIXPANEL_TOKEN, {
      uniqueIdSelector: ({ profile }) => profile.id,
      personSelector: ({ profile }) => ({
        clientId: profile.id,
        clientName: null,
        salesForceId: null,
        $first_name: profile.name,
        $last_name: null,
        $email: profile.email,
      }),
    }));
  }

  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      stateMiddleware,
    ),
  );

  sagaMiddleware.run(sagas);

  return store;
};
