import css from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.cardWrapper}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
