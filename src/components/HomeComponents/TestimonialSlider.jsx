import PropTypes from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const animationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="w-full py-15 flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <div className="flex-2 flex justify-start gap-5 items-center">
          <img
            className="w-18 h-18 rounded-full"
            src={testimonials[currentIndex]?.img}
            alt="people"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-medium">
              {testimonials[currentIndex]?.name},{" "}
            </h2>
            <span className="text-xs text-gray-400 font-medium">
              {testimonials[currentIndex]?.company}
            </span>
          </div>
        </div>
        <div className="flex-2 text-2xl italic mb-4 relative">
          <img
            src="/assets/img/quote.svg"
            alt="img"
            className="absolute top-0 left-0 w-15 -z-10"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              "{testimonials[currentIndex]?.feedback}"
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          className="bg-gray-400 hover:bg-white text-black text-xl px-3 py-2 rounded-full cursor-pointer"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-400 hover:bg-white text-black text-xl px-3 py-2 rounded-full cursor-pointer"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

TestimonialSlider.propTypes = {
  testimonials: PropTypes.array,
};

export default TestimonialSlider;
