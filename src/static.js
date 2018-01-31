import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { ConnectedRouter } from 'react-router-redux';
import template from './index.ejs';
import configureStore from './store/configure';
import Root from './components/Root/Root';
import i18n from './i18n';

if (typeof document !== 'undefined') {
  const history = createBrowserHistory();
  const store = configureStore(history);

  ReactDOM.render(
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <I18nextProvider i18n={ i18n }>
          <Root />
        </I18nextProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

export default ({ path, webpackStats }) => {
  const history = createMemoryHistory();
  const store = configureStore(history);
  const assetFilenames = Object.keys(webpackStats.compilation.assets);
  const context = {};

  const renderPath = (path) => template({
    htmlWebpackPlugin: {
      options: {
        stylesheet: assetFilenames.find(filename => filename.includes('.css')),
        script: assetFilenames.find(filename => filename.includes('.js')),
        html: renderToString(
          <Provider store={ store }>
            <StaticRouter context={ context } location={ path }>
              <I18nextProvider i18n={ i18n }>
                <Root />
              </I18nextProvider>
            </StaticRouter>
          </Provider>
        ),
      },
    },
  });

  const html = renderPath(path);

  return context.url
    ? renderPath(context.url)
    : html;
};
