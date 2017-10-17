import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from '../components/home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
