// src/redux/actions.js
import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad')
      .then((response) => {
        dispatch(fetchMoviesSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
