import cardCss from './MovieCard.module.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className={cardCss.cardLink}>
      <img
        className={cardCss.movieImg}
        src="https://via.placeholder.com/200x100"
        alt={movie.title}
      />
      <p className={cardCss.movieName}>{movie.title}</p>
    </Link>
  );
};

export default MovieCard;
