import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${movie.slug}/150x207.jpg`;
  return (
    <div className="movie">
      <img alt={movie.name} src={imageUrl} width="90%" />
      <h4>{movie.name}</h4>
      <h6>{movie.experiences}</h6>
     </div>
  )
}

MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.object
};

export default MovieItem;
