import HomePage from "pages/HomePage/HomePage";
import MovieDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import { Routes, Route} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import NotFoundPage from "pages/NotFoundPage";
import { Reviews } from "./Reviews/Reviews";
import { Cast } from "./Cast/Cast";


export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>

            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />

          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
