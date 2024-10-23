import castCss from './MovieCast.module.css';
import CastCard from '../CastCard/CastCard';

const MovieCast = ({ casts }) => {
  return (
    <>
      <ul className={castCss.list}>
        {casts.length > 0 ? (
          casts.map(cast => (
            <li key={cast.id} className={castCss.cardWrapper}>
              <CastCard cast={cast} />{' '}
            </li>
          ))
        ) : (
          <p>No casts available for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default MovieCast;
