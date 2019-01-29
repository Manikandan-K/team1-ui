import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';
import './MovieGrid.css';

class MovieGrid extends Component {

  constructor() {
    super();
    this.state = { selectedTab: 0 };
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  applyClass(tabIndex) {
    return this.state.selectedTab === tabIndex ? 'active-tab tab-btn' : 'tab-btn';
  }

  onTabClick(tabIndex) {
    this.setState({ selectedTab: tabIndex });
  }

  showMovies() {
    return (
      <div >
        <div className="tabs-wrapper">
          <button className={this.applyClass(0)} onClick={() => this.onTabClick(0)}>NOW RUNNING</button>
          <button className={this.applyClass(1)} onClick={() => this.onTabClick(1)}>COMING SOON</button>
        </div>

        <div className="movies-container">
          {this.state.selectedTab === 0 ? this.showRunningMovies() : this.showUpcomingMovies()}
        </div>
      </div>
    );
  }

  showRunningMovies() {
    return this.props.movies.items.map((movie) =>
      <MovieItem key={movie.name} movie={movie} />
    )
  }

  showUpcomingMovies(){
    return null;
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  },
};

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array,
  }),
};

export default connect(
  (state) => ({
    movies: state.movies
  }),
  (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies())
  }))(MovieGrid);
