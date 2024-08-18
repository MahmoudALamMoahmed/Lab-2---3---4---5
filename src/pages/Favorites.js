import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MyCard from "../components/MyCard";
import { removeFavorite } from "../redux/favoritesReducer";

function Favorites() {
  const { favorites } = useSelector((state) => state.favorites); // Access favorites from the state
  const dispatch = useDispatch();
  const favoritesCount = favorites.length;

  const handleRemoveFavorite = (movie) => {
    dispatch(removeFavorite(movie));
  };

  return (
    <>
      <h1 className="m-5">Your Favorite Movies</h1>
      
      <div className="container d-flex justify-content-around align-items-center flex-wrap">
        {favorites.length === 0 ? (
          <p className="text-center">No favorite movies</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.id} style={{ marginBottom: "50px" }}>
              <MyCard
                width={"18rem"}
                address={movie.release_date}
                bio={movie.original_title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                url={`/view/${movie.id}`}
              />
              <button
                onClick={() => handleRemoveFavorite(movie)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "24px"
                }}
              >
                <i className="bi bi-heart-fill" style={{ color: "red" }}></i>
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Favorites;
