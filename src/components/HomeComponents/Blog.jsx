import PropTypes from "prop-types";

function Blog({
  img,
  title = "_txt_",
  date,
  tags,
  btnText,
  handleClick = () => {},
}) {
  return (
    <div class="w-full">
      <div class="flex flex-col md:flex-row gap-6 items-center p-6 rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img src={img} alt="Blog Image" class="w-48 h-auto rounded-lg" />
        </div>

        <div class="flex-grow">
          <p class="text-sm text-gray-400 mb-2">{date}</p>
          <h2 class="text-2xl font-bold mb-4">{title}</h2>
          <div class="flex gap-2">
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
        </div>

        {btnText ? (
          <div>
            <button
              class="px-6 py-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-300 transition cursor-pointer"
              onClick={() => handleClick()}
            >
              {btnText}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

Blog.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.array,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Blog;
