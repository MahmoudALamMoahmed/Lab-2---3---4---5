/* import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesReducer";
import MyCard from "../components/MyCard";

function MovieComponent() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad")
      .then((res) => {
        setList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFavoriteClick = (movie) => {
    if (favorites.some(favorite => favorite.id === movie.id)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <>
      <h1 className="m-5">Popular Movies</h1>
      <div className="container d-flex justify-content-around align-items-center flex-wrap w-100 h-100">
        {list.map((movie) => {
          const isFavorite = favorites.some(favorite => favorite.id === movie.id);

          return (
            <div key={movie.id} style={{ marginBottom: "50px" }}>
              <MyCard
                width={"18rem"}
                title={movie.title}
                address={movie.release_date}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                url={`/view/${movie.id}`}
              />
              <button
                onClick={() => handleFavoriteClick(movie)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "24px"
                }}
              >
                <i
                  className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}
                  style={{ color: isFavorite ? 'red' : 'black' }}
                ></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieComponent; */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions';
import { addFavorite, removeFavorite } from '../redux/favoritesReducer';
import MyCard from '../components/MyCard';

function MovieComponent() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.favorites); // Adjust selector based on your state
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFavoriteClick = (movie) => {
    if (favorites.some((favorite) => favorite.id === movie.id)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="m-5">Popular Movies</h1>
      <div className="container d-flex justify-content-around align-items-center flex-wrap w-100 h-100">
        {movies.map((movie) => {
          const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

          return (
            <div key={movie.id} style={{ marginBottom: '50px',position:"relative" }}>
              <MyCard
                width={'18rem'}
                title={movie.title}
                address={movie.release_date}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                url={`/view/${movie.id}`}
                style={{ marginBottom: '50px'}}
              />
              <button
                onClick={() => handleFavoriteClick(movie)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '24px',
                  position:'absolute',
                  top:'358px',
                  right:'11px'
                }}
              >
                <i
                  className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}
                  style={{ color: isFavorite ? 'red' : 'black' }}
                ></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieComponent;
