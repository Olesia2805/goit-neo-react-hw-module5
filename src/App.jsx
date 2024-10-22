import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import Section from './components/Section/Section';
import Container from './components/Container/Container';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import Loader from './components/Loader/Loader';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

import moviesFAKE from './fakeApi.json';
// import css from './App.module.css';

const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage moviesFAKE={moviesFAKE} />} />
        <Route path="/movie" element={<MoviePage moviesFAKE={moviesFAKE} />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Section></Section>
    </Container>
  );
};

export default App;
