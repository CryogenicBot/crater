import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRoot from './components/app-root';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<AppRoot />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
