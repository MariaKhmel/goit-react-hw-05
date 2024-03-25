import { useEffect, useState } from "react";
import getTrendingMovies from "../../components/getTrendingMovies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </main>
  );
};

export default HomePage;
