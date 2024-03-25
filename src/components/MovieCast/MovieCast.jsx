import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovieCast from "../../components/getMovieCast";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, [movieId]);

  const slicedCast = movieCast.slice(0, 5);

  return (
    <div>
      <ul>
        {slicedCast.map((actor) => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <p>Character : {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
