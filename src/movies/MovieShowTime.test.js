import React from 'react';
import ReactDOM from 'react-dom';
import MovieGrid from './MovieGrid';
import MovieShowTime from './MovieShowTime';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const browserHistory = createHistory();
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
import { FETCH_SHOWTIMES_PROGRESS } from './actions';
const mockData = {
    fetching: false,
    showtimes: [{"movieId":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","movieDate":"2019-02-03","movieTime":"11:30:00"}],
    error: false
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore({showtimes: mockData})
  const component =  <Provider store={store} ><ConnectedRouter history={browserHistory}><MovieShowTime /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Starts fetching Movie showtimes Before Render', () => {
  const div = document.createElement('div');
  const store = mockStore({showtimes: mockData})
  const paramsData = {
    params: {
      id: 1
    }
  }
  const component =  <Provider store={store} ><ConnectedRouter history={browserHistory}><MovieShowTime match={paramsData} /></ConnectedRouter></Provider>
  
  ReactDOM.render( component, div);
  expect(store.getActions()).toContainEqual({"type": FETCH_SHOWTIMES_PROGRESS});
  ReactDOM.unmountComponentAtNode(div);
});