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
    return (
      <div>
      <div className="tabs-wrapper">
        <button className={this.applyClass(0)} onClick={() => this.onTabClick(0)}>NOW RUNNING</button>
        <button className={this.applyClass(1)} onClick={() => this.onTabClick(1)}>COMING SOON</button>
        </div>
        { this.renderMainContent() }
      </div>
    )
  }
  renderMainContent() {
    if (this.props.movies.fetching) {
      return this.showProgress();
    }
    return this.props.movies.error ? this.showError() : this.showMovies();
  }

  applyClass(tabIndex) {
    return this.state.selectedTab === tabIndex ? 'active-tab tab-btn' : 'tab-btn';
  }

  onTabClick(tabIndex) {
    this.setState({ selectedTab: tabIndex });
    this.loadMovies(tabIndex)
  }

  loadMovies(tabIndex) {
    console.log("Tab Index Is", tabIndex);
    return tabIndex === 0 ? this.loadNowShowingMovies() : this.loadUpcomingMovies();
  }
  loadNowShowingMovies() {
    this.props.fetchMovies('now-showing')
  }
  loadUpcomingMovies() {
    console.log("Inside Load Upcoming Movies");
    this.props.fetchMovies('upcoming')
  }

  showMovies() {
    return (
      <div >
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
    return this.props.movies.items.map((movie) =>
    <MovieItem key={movie.name} movie={movie} />
  )
  }

  showProgress() {
    return (
      <div className="loading-sign">Loading...</div>
    );
  }

  showError() {
    return (
      <div className="loading-sign">Error... Something Went Wrong</div>
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
    fetchMovies: (movieType) => dispatch(fetchMovies(movieType))
  }))(MovieGrid);
