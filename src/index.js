import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './app/store';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

const browserHistory = createHistory();
const store = configureStore(browserHistory);
const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
    <Route component={App} path="/" />
    </Switch>
  </ConnectedRouter>
);

ReactDOM.render(<Provider store={store} ><Routes /></Provider>, document.getElementById('root'));
registerServiceWorker();
