import React from 'react';
import ReactDOM from 'react-dom';
import MovieGrid from './MovieGrid';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const browserHistory = createHistory();
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
import { FETCH_MOVIES_PROGRESS } from './actions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component =  <Provider store={mockStore({})} ><ConnectedRouter history={browserHistory}><MovieGrid /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Starts fetching Movies Before Render', () => {
  const div = document.createElement('div');
  const store = mockStore({})
  const component =  <Provider store={store} ><ConnectedRouter history={browserHistory}><MovieGrid /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  expect(store.getActions()).toContainEqual({"type": FETCH_MOVIES_PROGRESS});
  ReactDOM.unmountComponentAtNode(div);
});