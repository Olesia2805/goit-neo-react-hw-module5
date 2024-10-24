import castCss from './CastCard.module.css';

const CastCard = ({ cast }) => {
  return (
    <>
      <img
        className={castCss.movieImg}
        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
        alt={cast.name}
      />
      <h5 className={castCss.name}>{cast.name}</h5>
      <p className={castCss.character}>
        Character: <span>{cast.character || 'unknown'}</span>
      </p>
    </>
  );
};

export default CastCard;
