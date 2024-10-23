import ReviewCard from '../ReviewCard/ReviewCard';
import reviewsCss from './MovieReviews.module.css';

const MovieReviews = ({ reviews }) => {
  return (
    <>
      <ul className={reviewsCss.list}>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id} className={reviewsCss.cardWrapper}>
              <ReviewCard review={review} />{' '}
            </li>
          ))
        ) : (
          <p>No reviews available for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;
