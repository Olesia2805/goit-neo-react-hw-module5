import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className={css.cardWrapper}>
          <Link to={`${movie.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3 className={css.movieName}>{movie.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;