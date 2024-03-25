import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import getMovieDetails from "../../components/getMovieDetails";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, [movieId]);

  const { title, overview, genres, vote_average, poster_path } = movieData;

  const roundedPopularity = Math.round(vote_average * 10);
  const imgPath = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "not found";

  return (
    <main>
      <Link to={backLinkHref}>🠔 Go back</Link>
      <div>
        <img src={imgPath} alt={title} width="200" height="300" />
        <h2>{title}</h2>
        <p>User score : {roundedPopularity}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres &&
            genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
      <div>
        <p>Additional Information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
