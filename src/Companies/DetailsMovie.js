import axios from "axios";
import MyTitle from "../components/MyTitle";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import MyCard from "../components/MyCard";

function DetailsMovie(props) {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=29cf44b93ca83bf48d9356395476f7ad`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <>
      <MyTitle head={"Movie Details"} titleClr={"primary"} />
      <hr />
      <h1 className="text-center text-dark m-4"> {movie.title} </h1>
      <div>
        <MyCard
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
         /*  bio={movie.overview} */
          address={` ${movie.release_date}`}
          num={`Rating: ${movie.vote_average}`}
          width={"50rem"}
        />
      </div>
    </>
  );
}

export default DetailsMovie;
