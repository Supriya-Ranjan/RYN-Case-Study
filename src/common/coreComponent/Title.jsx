import PropTypes from "prop-types";

function Title({
  path,
  name,
  classes = "text-4xl font-bold",
  isViewAll = false,
  handleIsView = () => {},
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 w-full h-auto">
        <img src={path} alt="bullet" />
        <span className={`${classes}`}>{name}</span>
      </div>
      {isViewAll ? (
        <a
          onClick={handleIsView}
          className="underline w-15 hover:text-blue-700 cursor-pointer"
        >
          View all
        </a>
      ) : null}
    </div>
  );
}

Title.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.string,
  isViewAll: PropTypes.bool,
  handleIsView: PropTypes.func,
};

export default Title;
