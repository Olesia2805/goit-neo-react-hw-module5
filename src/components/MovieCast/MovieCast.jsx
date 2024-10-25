import castCss from './MovieCast.module.css';
import CastCard from '../CastCard/CastCard';
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api/movies-api';

const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCasts = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const castData = await fetchMovieCast(movieId);
        setCasts(castData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCasts();
  }, [movieId]);

  console.log(error);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Please try again.</p>}
      <ul className={castCss.list}>
        {casts?.length > 0
          ? casts.map(cast => (
              <li key={cast.id} className={castCss.cardWrapper}>
                <CastCard cast={cast} />{' '}
              </li>
            ))
          : !isLoading && !error && <p>No casts available for this movie.</p>}
      </ul>
    </>
  );
};

export default MovieCast;
