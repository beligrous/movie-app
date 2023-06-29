import { useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

const TrendingCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="border border-teal-100 shadow-xl "
      onClick={() => setShowModal(true)}
    >
      <p>{data.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
        alt="movie poster"
      />
      {showModal &&
        createPortal(
          <Modal data={data} onClose={() => setShowModal(false)} />,
          document.body
        )}
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
