import detailsCss from './MovieDetailsPage.module.css';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../../api/movies-api';
import Loader from '../../components/Loader/Loader';
import { IoArrowUndoOutline } from 'react-icons/io5';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const singleMovie = await fetchSingleMovie(movieId);
        setMovie(singleMovie);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSingleMovie();
  }, [movieId]);

  return (
    <main className={detailsCss.main}>
      <button className={detailsCss.submitButton}>
        <IoArrowUndoOutline /> Go back
      </button>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Please try again.</p>}
      {movie ? (
        <div className={detailsCss.movieDetails}>
          <img
            className={detailsCss.movieImg}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className={detailsCss.info}>
            <h2 className={detailsCss.title}>{movie.title}</h2>
            <p className={detailsCss.score}>
              User Score: {(movie.vote_average * 10).toFixed(1)}%
            </p>
            <h3 className={detailsCss.overview}>Overview</h3>
            <p className={detailsCss.textOverview}>{movie.overview}</p>
            <h4 className={detailsCss.genres}>Genres</h4>
            <p className={detailsCss.genersList}>
              {movie.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
      ) : (
        !isLoading && !error && <p>No movies to display.</p>
      )}
      <div className={detailsCss.additionalInfo}>
        <p>ADDITIONAL INFORMATION</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
export default MovieDetailsPage;
