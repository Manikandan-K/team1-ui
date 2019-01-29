import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class MovieGrid extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <Grid container spacing={24}>
        {this.props.movies.items.map((movie) => (
          <Grid item xs={2} key={movie.name}>
            <Paper>
              <MovieItem movie={movie}/>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
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
