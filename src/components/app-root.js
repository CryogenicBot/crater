import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './general/loading';
import { Provider } from 'react-redux';
import Home from './home';

const PageDoesNotExist = Loadable({
  loader: () => import('./general/page-does-not-exist'),
  loading: Loading
});

class AppRoot extends Component {
  constructor(props) {
    super();
    this.store = props.store;
  }

  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageDoesNotExist} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoot;
