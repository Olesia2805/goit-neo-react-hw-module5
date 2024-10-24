import reviewCss from './ReviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <>
      <h5 className={reviewCss.name}>Author: {review.author.toUpperCase()}</h5>
      <p className={reviewCss.text}>{review.content}</p>
    </>
  );
};

export default ReviewCard;
