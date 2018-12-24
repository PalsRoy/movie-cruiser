import * as actionTypes from '../constants/globalConstants';

var initialState = {
  movies: [],
  favourites: [],
  fetchFailure: false,
  addFailure: false
}

export default function(state = initialState,action){
  const { type, payload } = action;

  switch(type){
  case actionTypes.UPDATE_FETCH_PHRASE__START:
    return{...state,fetchFailure:false};
  case actionTypes.UPDATE_FETCH_PHRASE__SUCCESS:
    return{...state,movies:payload.moviesData,favourites:payload.favouritesData};
  case actionTypes.UPDATE_FETCH_PHRASE__FAILURE:
    return{...state,fetchFailure:true};
  case actionTypes.ADD_FAVOURITE:
    return{...state,movies:payload.newMoviesData,favourites:payload.newFavouritesData,addFailure:false};
  case actionTypes.FAILED_ADD_FAVOURITE:
    return{...state,addFailure:true};
  default:
    return state;
  }
}
