import reviewsCss from './MovieReviews.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/movies-api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const reviewData = await fetchMovieReviews(movieId);
        setReviews(reviewData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Please try again.</p>}
      <ul className={reviewsCss.list}>
        {reviews?.length > 0
          ? reviews.map(review => (
              <li key={review.id} className={reviewsCss.cardWrapper}>
                <ReviewCard review={review} />{' '}
              </li>
            ))
          : !isLoading && !error && <p>No reviews available for this movie.</p>}
      </ul>
    </>
  );
};

export default MovieReviews;
