import axios from 'axios';
import  * as apiAction from './apiAction';

export const getMovies = () =>
  (dispatch,getState) => {

  dispatch(
    apiAction.updateFetchPhraseStart()
  );

  axios.get('db.json')
  .then(({data}) =>{
    const moviesData = data.movies;
    const favouritesData = data.favourites;

    dispatch(
      apiAction.updateFetchPhraseSuccess({moviesData,favouritesData})
    );
  })
  .catch(() =>{
    dispatch(
      apiAction.updateFetchPhraseFailure()
    );
  });
};

export const addFavourite = (id) =>
   (dispatch,getState) => {
  const state = getState();
  var movies = state.moviesReducer.movies;
  var favourites = state.moviesReducer.favourites;
  var selectedMoviesData,newMoviesData,newFavouritesData,checkFavourite = [];

  //get the details of the movie whose id matches
  selectedMoviesData = movies.filter(movie =>{
    return movie.id === id;
  });

  //also check if the movie already exists in favourites
  checkFavourite = favourites.filter(favourites =>{
    return favourites.id === id;
  });

  if(checkFavourite.length > 0){
      dispatch(
        apiAction.failUpdateFavourite()
      );
    }else{
      //add the movie details to Favourites now
      favourites.push(selectedMoviesData[0])
      newFavouritesData = [...favourites];

      //Now remove this movie from the existing Movies List
      newMoviesData = movies.filter(movie =>{
        return movie.id !== id;
      });

      dispatch(
        apiAction.updateFavourite({newMoviesData,newFavouritesData})
      );
    }
};
