import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetail from './MovieDetail';
import { Provider } from 'react-redux';
import { FETCH_MOVIE_PROGRESS } from './actions';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const browserHistory = createHistory();
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
const mockData = {
  fetching: false,
  details: {
    name: "Movie Name",
    slug: "movie slug",
    experiences: ""
  }
  
}
const fetchMovieInProgress = {
  type: FETCH_MOVIE_PROGRESS
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component =  <Provider store={mockStore({movie: { error: true}})} ><ConnectedRouter history={browserHistory}><MovieDetail /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Starts fetching Movies Before Render', () => {
  const div = document.createElement('div');
  const paramsData = {
    params: {
      id: 1
    }
  }
  const store = mockStore({movie: mockData})
  const component =  <Provider store={store} ><ConnectedRouter history={browserHistory}><MovieDetail match={paramsData} movie={mockData} /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  expect(store.getActions()).toContainEqual(fetchMovieInProgress);
  ReactDOM.unmountComponentAtNode(div);
});
