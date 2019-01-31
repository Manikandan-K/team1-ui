import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const browserHistory = createHistory();
const store = configureStore(browserHistory);
import configureStore from './store';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store} ><ConnectedRouter history={browserHistory}><App /></ConnectedRouter></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
