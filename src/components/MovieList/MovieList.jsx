import css from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className={css.list}>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
