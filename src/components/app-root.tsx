import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Loadable from 'react-loadable';

import Main from './main';
import Loading from './general/loading';
import rootReducer from '../reducers/root-reducer';

export interface AppState {
  selectedMonth: string;
  category: {
    selectedCategory: string;
    categoryText: string;
  };
}

const monthList: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const initialState: AppState = {
  selectedMonth: monthList[new Date().getMonth()],
  category: {
    selectedCategory: '',
    categoryText: '',
  }
};

const store = createStore(rootReducer, initialState);

const PageDoesNotExist = Loadable({
  loader: () => import('./general/page-does-not-exist'),
  loading: Loading
});

class AppRoot extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={() => <Main monthList={monthList}/>}/>
            <Route component={PageDoesNotExist} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoot;
