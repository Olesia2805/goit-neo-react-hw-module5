import css from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';

export const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.cardWrapper}>
          <MovieCard movie={movie} location={location} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
