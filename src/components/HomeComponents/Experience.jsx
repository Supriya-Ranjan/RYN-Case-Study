import PropTypes from "prop-types";

function Experience({ role, name, date }) {
  return role ? (
    <div class="flex justify-between items-center border-b border-gray-300 py-4">
      <div>
        <h2 class="text-lg font-semibold text-white">{role}</h2>
      </div>

      <div class="text-right">
        <p class="text-white font-medium">{name}</p>
        <p class="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  ) : null;
}

Experience.propTypes = {
  role: PropTypes.string,
  name: PropTypes.name,
  date: PropTypes.date,
};

export default Experience;
