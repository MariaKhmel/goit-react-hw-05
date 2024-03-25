import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        rtl={false}
        theme="dark"
      />
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
