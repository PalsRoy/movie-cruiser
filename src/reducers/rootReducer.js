import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';

export default combineReducers({
  moviesReducer: MoviesReducer
});
