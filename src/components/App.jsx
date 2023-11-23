import { GlobalStyle } from "GlobalStyle";
import { Routes, Route } from "react-router-dom";


export const App = () => {




  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>

    <GlobalStyle />
    </div>
  );
};
