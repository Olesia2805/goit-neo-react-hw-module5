import cardCss from './MovieCard.module.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, location }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      state={location}
      className={cardCss.cardLink}
    >
      <img
        className={cardCss.movieImg}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p className={cardCss.movieName}>{movie.title}</p>
    </Link>
  );
};

export default MovieCard;
