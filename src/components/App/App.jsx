import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";

// import Navigation from "../Navigation/Navigation";
// import HomePage from "../../pages/HomePage/HomePage";
// import MoviesPage from "../../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieReviews from "../MovieReviews/MovieReviews";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={css.container}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
