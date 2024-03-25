import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
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
      <div className={css.filmCard}>
        <img src={imgPath} alt={title} width="200" height="300" />
        <div>
          <h2 className={css.title}>{title}</h2>
          <p className={css.filmDescr}>User score : {roundedPopularity}%</p>
          <h3 className={css.title}>Overview</h3>
          <p className={css.filmDescr}>{overview}</p>
          <h3 className={css.title}>Genres</h3>
          <ul className={css.genresList}>
            {genres &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <p>Additional Information</p>
        <Link to="cast" className={css.additionalInfoLink}>
          Cast
        </Link>
        <Link to="reviews" className={css.additionalInfoLink}>
          Reviews
        </Link>
      </div>

      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
