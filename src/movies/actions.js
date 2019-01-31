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

export function fetchMovie(id) {
  return async (dispatch) => {
    dispatch(FETCH_MOVIE_PROGRESS);
    try {
      const response = await axios.get(`${baseUrl()}/movies/${id}`);
      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: response.data
      });
    }
    catch (error) {
      dispatch(FETCH_MOVIES_FAILURE);
    }
  }
}

export default fetchMovies;
