import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${movie.slug}/150x207.jpg`;
  return (
    <div className="movie-wrapper">
      <div className="movie">
        <img className="movie-image" alt={movie.name} src={imageUrl} />
        <div className="movie-details">
          <h4>{movie.name}</h4>
          <h6>{movie.experiences}</h6>
        </div>
      </div>
    </div>

  )
}

MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.object
};

export default MovieItem;
