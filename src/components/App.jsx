import { Routes, Route} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Reviews } from "./Reviews/Reviews";
import { Cast } from "./Cast/Cast";
import { Suspense, lazy } from "react";
import { StyledSecondaryText } from "GlobalStyle.styled";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));


export const App = () => {

  return (
    <>
      <Suspense fallback={<StyledSecondaryText>LOADING...</StyledSecondaryText>}>
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
        </Suspense>
    </>
  );
};
