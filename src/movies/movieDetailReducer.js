import { FETCH_MOVIE_PROGRESS, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from './actions'

const movieDetailReducer = (state = { fetching: false, details: [], error: false }, action) => {
  switch(action.type) {
    case FETCH_MOVIE_PROGRESS: return {...state, fetching: true , error: false };
    case FETCH_MOVIE_SUCCESS: return {...state, fetching: false, details: action.payload, error: false };
    case FETCH_MOVIE_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default movieDetailReducer;