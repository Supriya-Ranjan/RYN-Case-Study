import PropTypes from "prop-types";

function NavLinks({ path, title }) {
  return (
    <a
      href={path}
      className="font-syne text-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition active:bg-white active:text-black"
    >
      {title}
    </a>
  );
}

NavLinks.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};

export default NavLinks;
