import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies, {showtimeReducer} from '../movies/reducer';
import movieReducer from '../movies/movieDetailReducer'
const rootReducer = combineReducers({
  movies,
  movie: movieReducer,
  showtimes: showtimeReducer,
  routing: routerReducer,
});

export default rootReducer;