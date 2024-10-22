import cardCss from './MovieCard.module.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, key }) => {
  return (
    <div key={key} className={cardCss.cardWrapper}>
      <Link to={`$/movies/${key}`}>
        <img
          className={cardCss.movieImg}
          src="https://via.placeholder.com/200x100"
          alt=""
        />
        <h3 className={cardCss.movieName}>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
