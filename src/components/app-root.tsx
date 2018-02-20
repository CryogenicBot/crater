import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Loadable from 'react-loadable';

import Setup from './setup';
import Main from './main';
import Loading from './general/loading';
import rootReducer from '../reducers/root-reducer';

export interface AppState {
  selectedMonth: string;
  category: {
    selectedCategory: string;
    categoryText: string;
    allCategories: string[];
    filteredCategories: string[];
  };
  data: {
    category: string;
    value: number;
  }[];
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
    allCategories: [],
    filteredCategories: []
  },
  data: [],
};

const store = createStore(rootReducer, initialState);

const PageDoesNotExist = Loadable({
  loader: () => import('./general/page-does-not-exist'),
  loading: Loading
});

class AppRoot extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={() => <Setup />}/>
            <Route exact={true} path="/budget/:amt" component={() => <Main />}/>
            <Route component={PageDoesNotExist} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoot;
