// import reviewCss from './ReviewCard.module.css'

const ReviewCard = ({ review }) => {
  return (
    <>
      <h5>Author: {review.name}</h5>
      <p>{review.content}</p>
    </>
  );
};

export default ReviewCard;
