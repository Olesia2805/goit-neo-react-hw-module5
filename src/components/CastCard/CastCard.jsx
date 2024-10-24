import castCss from './CastCard.module.css';

const CastCard = ({ cast }) => {
  return (
    <>
      <img
        className={castCss.movieImg}
        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
        alt={cast.name}
      />
      <h5>{cast.name}</h5>
      <p>Character: {cast.character}</p>
    </>
  );
};

export default CastCard;
