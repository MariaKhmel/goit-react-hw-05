import { useSearchParams } from "react-router-dom";
import getMovieByName from "../../components/getMovieByName";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const movieSearchValue = searchParams.get("query") || "";

  useEffect(() => {
    if (movieSearchValue === null) return;
    const handleSearch = async () => {
      try {
        const data = await getMovieByName(movieSearchValue);
        setMoviesByQuery(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleSearch();
  }, [movieSearchValue]);

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.input.value;
    if (query === "") {
      alert("Please enter a search word");
    }
    updateQueryString(query);
    form.reset();
  };

  return (
    <main>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={moviesByQuery} />
    </main>
  );
};
export default MoviesPage;
