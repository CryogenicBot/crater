import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/general/loading';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const AsyncHome = Loadable({
  loader: () => import('./components/home'),
  loading: Loading
});

const PageDoesNotExist = Loadable({
  loader: () => import('./components/general/page-does-not-exist'),
  loading: Loading
});

let store = createStore(
  (state = { stateText: 'start', counter: 0 }, action) => {
    return Object.assign({}, state, {
      stateText: 'changed',
      counter: state.counter + 1
    });
  }
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route component={PageDoesNotExist} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
