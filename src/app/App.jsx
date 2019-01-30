import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
import Header from './components/header/Header'
import Home from './Home'
import Test from './test'
import Footer from './components/footer/Footer'

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
      <Route component={Test} path="/login/" />
      <Route component={Home} path="/" />
    </Switch>
  </ConnectedRouter>
);

const Main = () => (
  <div>
    <Header />
    <Routes />
    <Footer />
  </div>
);

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
