import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const browserHistory = createHistory();
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);


it('renders without crashing', () => {
  const div = document.createElement('div');
  const component =  <Provider store={mockStore({})} ><ConnectedRouter history={browserHistory}><App /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  ReactDOM.unmountComponentAtNode(div);
});
