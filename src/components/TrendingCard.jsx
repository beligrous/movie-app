import PropTypes from "prop-types";

const TrendingCard = ({ data }) => {
  return (
    <div className="border border-red-50">
      <p>{data.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
        alt="movie poster"
      />
    </div>
  );
};

export default TrendingCard;

TrendingCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};
