import * as actionTypes from '../constants/globalConstants';

export const updateFetchPhraseStart = () => ({
  type: actionTypes.UPDATE_FETCH_PHRASE__START,
});
export const updateFetchPhraseSuccess = ({ moviesData,favouritesData }) => ({
  type: actionTypes.UPDATE_FETCH_PHRASE__SUCCESS,
  payload: {
    moviesData,
    favouritesData
  },
});
export const updateFetchPhraseFailure = () => ({
  type: actionTypes.UPDATE_FETCH_PHRASE__FAILURE,
});

export const updateFavourite = ({newMoviesData, newFavouritesData}) => ({
  type: actionTypes.ADD_FAVOURITE,
  payload: {
    newMoviesData,
    newFavouritesData
  },
});

export const failUpdateFavourite = () => ({
  type: actionTypes.FAILED_ADD_FAVOURITE,
});
