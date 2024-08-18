// src/redux/favoritesReducer.js
/* const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (product) => ({
  type: ADD_FAVORITE,
  payload: product,
});

export const removeFavorite = (product) => ({
  type: REMOVE_FAVORITE,
  payload: product,
});

const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
}; */


// src/redux/favoritesReducer.js
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const addFavorite = (product) => ({
  type: ADD_FAVORITE,
  payload: product,
});

export const removeFavorite = (product) => ({
  type: REMOVE_FAVORITE,
  payload: product,
});

const initialState = {
  favorites: [],
  movies: [],
  loading: false,
  error: '',
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((product) => product.id !== action.payload.id),
      };
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
