import PropTypes from "prop-types";

function Work({
  img,
  title = "_txt_",
  desc,
  tags = [],
  btnText,
  handleClick = () => {},
}) {
  return (
    <div className="relative h-auto w-full">
      {/* Background Circle */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-[rgba(255,128,74,0.5)] blur-3xl h-64 w-80 z-0 overflow-hidden" />

      {/* Foreground Container */}
      <div className="relative bg-[rgba(203,203,203,0.47)] p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg w-full z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <img
            src={img}
            alt="Work Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-between">
          {/* Title and Description */}
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg font-poppins leading-relaxed mb-6">{desc}</p>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {tags?.length
              ? tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 border border-amber-50 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))
              : null}
          </div>

          {/* Call-to-Action Button */}
          {btnText ? (
            <div className="absolute bottom-8">
              <button
                className="mt-4 px-6 py-3 w-fit cursor-pointer bg-white text-gray-900 font-bold rounded-full hover:bg-gray-300 transition"
                onClick={() => handleClick()}
              >
                {btnText}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

Work.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.array,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Work;
