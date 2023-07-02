import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Modal = ({ data, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-slate-50 bg-opacity-5"
      }`}
    >
      <div className="w-800 h-auto p-3 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border-red-500 border-4">
        <button
          className="rounded-full mb-3 border-red-500 border-4"
          onClick={() => {
            onClose();
          }}
          type="button"
        >
          close
        </button>
        <Link
          className="rounded-full mb-3 p-3 text-inherit border-red-500 border-4"
          to={`/${data.id}`}
        >
          watch
        </Link>
        <img
          src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
          alt="movie poster"
        />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
  }),
};
