import PropTypes from "prop-types";

const Modal = ({ data, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-slate-600 bg-opacity-50"
      }`}
    >
      <div className="w-800 h-auto absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border-red-500 border-4">
        <button className="rounded" onClick={onClose} type="button">
          close
        </button>
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
    poster_path: PropTypes.string,
  }),
};
