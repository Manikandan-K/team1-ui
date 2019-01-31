import React from 'react';
import ReactDOM from 'react-dom';
import MovieItem from './MovieItem';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const browserHistory = createHistory();
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
const mockData = {
    name: "Movie Name",
    slug: "movie slug",
    experiences: ""
    
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component =  <Provider store={mockStore({})} ><ConnectedRouter history={browserHistory}><MovieItem movie={mockData} /></ConnectedRouter></Provider>
  ReactDOM.render( component, div);
  ReactDOM.unmountComponentAtNode(div);
});



