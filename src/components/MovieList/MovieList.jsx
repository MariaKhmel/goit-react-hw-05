import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </ul>
  );
};
export default MovieList;
