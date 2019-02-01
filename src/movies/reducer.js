import { FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_SHOWTIMES_PROGRESS, FETCH_SHOWTIMES_SUCCESS, FETCH_SHOWTIMES_FAILURE } from './actions'

const reducer = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_MOVIES_PROGRESS: return {...state, fetching: true };
    case FETCH_MOVIES_SUCCESS: return {...state, fetching: false, items: action.payload };
    case FETCH_MOVIES_FAILURE: return {...state, fetching: false, error: true }
    
    default: return {...state}
  }
}

export const showtimeReducer = (state = { fetching: false, showtimes: [], error: false }, action) => {
  switch(action.type) {
    case FETCH_SHOWTIMES_PROGRESS: return {...state, fetching: true }
    case FETCH_SHOWTIMES_SUCCESS: return {...state, fetching: false,  showtimes: action.payload }
    case FETCH_SHOWTIMES_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default reducer;