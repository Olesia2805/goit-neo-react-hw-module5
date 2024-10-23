import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import Section from './components/Section/Section';
import Container from './components/Container/Container';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Navigation />
      <Container>
        <Section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Section>
      </Container>
    </>
  );
};

export default App;
