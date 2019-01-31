import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';


import Header from './components/header/Header';
import Home from './Home';
import Footer from './components/footer/Footer';

const Routes = () => (
  <Switch>
  <Route component={Home} path="/" />
  </Switch>
);
const Main = () => (
  <div class="maincontent">
    <div className="header-wrapper">
      <Header />
    </div>
    <div className="router-wrapper">
      <Routes />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);

const App = () => (
    <Main />
);

export default App;
