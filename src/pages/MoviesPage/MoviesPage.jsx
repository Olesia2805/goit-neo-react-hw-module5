import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../fakeApi';

const MoviePage = () => {
  const movies = getMovies();

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default MoviePage;
