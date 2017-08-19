import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './register-service-worker';
import AppRoot from './components/app-root';
import rootReducer from './reducers/root-reducer';
import { createStore } from 'redux';

const initialState = {};

function configureStore() {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    //enable webpack hot module replacement for reducers
    module.hot.accept('./reducers/root-reducer', () => {
      const nextRootReducer = require('./reducers/root-reducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

let configuredStore = configureStore();

function renderRoot(Component) {
  render(
    <AppContainer>
      <Component store={configuredStore} />
    </AppContainer>,
    document.getElementById('root')
  );
}

renderRoot(AppRoot);

if (module.hot) {
  module.hot.accept('./components/app-root', () => {
    renderRoot(AppRoot);
  });
}

registerServiceWorker();
