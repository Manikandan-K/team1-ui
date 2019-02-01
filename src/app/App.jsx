import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/Header'
import Home from './Home'
import Footer from './components/footer/Footer'
import MovieDetail from '../movies/MovieDetail';
import MovieShowTime from '../movies/MovieShowTime';
import './App.css';

const Routes = () => (

  <Switch>
    <Route component={MovieShowTime} path="/movies/showtimes/:id" />
    <Route component={MovieDetail} path="/movies/:id" />
    <Route component={Home} path="/" />
  </Switch>
);
const Main = () => (
  <div className="maincontent">
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
