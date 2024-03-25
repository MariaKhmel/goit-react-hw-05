import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getMovieReviews from "../../components/getMovieReviews";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, [movieId]);

  return movieReviews.length > 0 ? (
    <div>
      {movieReviews.map((review) => (
        <li key={review.id}>
          <p>AUTHOR : {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  ) : (
    <p>We don&apos;t have any reviews for this movie.</p>
  );
};

export default MovieReviews;
