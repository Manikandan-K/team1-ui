import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import { baseUrl } from "./helper";

export const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_MOVIE_PROGRESS = 'FETCH_MOVIE_PROGRESS';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const FETCH_SHOWTIMES_SUCCESS = 'FETCH_SHOWTIMES_SUCCESS';
export const FETCH_SHOWTIMES_PROGRESS = 'FETCH_SHOWTIMES_PROGRESS';
export const FETCH_SHOWTIMES_FAILURE = 'FETCH_SHOWTIMES_FAILURE'; 

const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data,
});

const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE,
};


const fetchMovieInProgress = {
  type: FETCH_MOVIE_PROGRESS
}
const movieDetailsFailure = {
  type: FETCH_MOVIE_FAILURE,
};

const fetchMovieShowTimesInProgress = {
  type: FETCH_SHOWTIMES_PROGRESS
};

const fetchMovieShowTimesDataFailure = {
  type: FETCH_SHOWTIMES_FAILURE
};

const movieShowTimeDataFetched = (data) => ({
  type: FETCH_SHOWTIMES_SUCCESS,
  payload: data.data
});

const fetchMovies = (movieType = 'now-showing') => {
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress);
    try {
      const movies = await axios.get(`${baseUrl()}/movies/${movieType}`)
      // const movies = {data: [{
      //   id: 'asfasdfas',
      //   name: 'Kabali',
      //   experience: 'asfasdfag',
      // }]}
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
        return { ...movie, slug: sluggedData }
      });
      dispatch(movieDataFetched(moviesData))
    } catch (error) {
      dispatch(movieDataFetchFailure)
    }
  }
};

export const fetchMovie = (id = 0) => {
  return async (dispatch) => {
    dispatch(fetchMovieInProgress);
    try {
      const response = await axios.get(`${baseUrl()}/movies/details/${id}`);
      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: { ...response.data, slug: slug(changeCase.sentenceCase(response.data.name), { lower: true }) }
      });
    }
    catch (error) {
      dispatch(movieDetailsFailure);
    }
  }
}

export const fetchMovieShowTimes = (id = 0) => {
  return async (dispatch) => {
    dispatch(fetchMovieShowTimesInProgress);

    try {
      const movieshowTimes = await axios.get(`${baseUrl()}/movies/showtimes/${id}`)
      dispatch(movieShowTimeDataFetched(movieshowTimes))
    } catch (error) {
      dispatch(fetchMovieShowTimesDataFailure)
    }
  }
}

export default fetchMovies;
