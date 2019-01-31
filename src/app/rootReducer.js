import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import movieReducer from '../movies/movieDetailReducer'
const rootReducer = combineReducers({
  movies,
  movie: movieReducer,
  routing: routerReducer,
});

export default rootReducer;