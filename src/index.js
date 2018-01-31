import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import Root from './components/Root/Root';
import i18n from './i18n';

const history = createHistory();
const store = configureStore(history);

function render(AppComponent) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <I18nextProvider i18n={ i18n }>
            <AppComponent />
          </I18nextProvider>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root/Root', () => render(Root));
}
